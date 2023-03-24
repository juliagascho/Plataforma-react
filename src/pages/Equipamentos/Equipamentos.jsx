import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Equipamentos.css";

export function Equipamentos() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [equip, setEquip] = useState();


    function onSubmitEquip(equip) {
        setEquip(equip);        
    }

    return (
        <div className="equipamentos">
            
            <h1>Cadastro de equipamentos eletrônicos</h1>
            <form onSubmit={handleSubmit(onSubmitEquip)}>
                <label htmlFor="marcamodelo">Marca e modelo</label> <br />
                <input type="text" id="marcamodelo" {...register("marcamodelo", { required: true, maxLength: 255 })}/> <br />
                {errors.marcamodelo &&  <span className="invalid">Digite uma marca e um modelo válidos!</span> } <br />
                
                <label htmlFor="serie">Número de série</label> <br />
                <input type="number" id="serie" {...register("serie", {required: true})} /> <br />
                {errors.serie &&  <span className="invalid">Digite um número de série válido!</span> } <br />

                <label htmlFor="descricao">Descrição do problema</label> <br />
                <textarea id="descricao" {...register("descricao", { required: true, maxLength: 255 })} /> <br />
                
                {errors.descricao &&  <span className="invalid">Digite uma descrição válida!</span> } <br />

                <label htmlFor="data">Data de entrada</label> <br />
                <input type="date" id="data" {...register("data", {required: true})} /> <br />
                {errors.data &&  <span className="invalid">Adicione uma data válida!</span> } <br />

                <label htmlFor="entrega">Data de previsão de entrega</label> <br />
                <input type="date" id="entrega" {...register("entrega", { required: true })} /> <br />
                {errors.entrega &&  <span className="invalid">Adicione uma previsão de entrega válida!</span> } <br />

                <select htmlFor="selecao" id="status" {...register("status", {required: true})}>
                    <option value="" disabled>Selecione o status do equipamento</option>                   
                    <option value="Pendente">Pendente</option>
                    <option value="Concluído">Concluído</option>
                    <option value="Entregue">Entregue</option>
                </select>
                <br />
                <br />

                <button type="submit">Cadastrar</button> <br />

                <br />
                <br />
            </form>
                
                {equip && 
                    <Alert variant="danger">
                        Novo equipamento cadastrado! <br />
                        Marca e modelo: {equip.marcamodelo} <br />
                        Número de série: {equip.serie} <br />
                        Descrição: {equip.descricao} <br />
                        Data de entrada: {equip.data} <br />
                        Previsão de entrega: {equip.entrega} <br />
                        Status do equipamento: {equip.status} <br />
                    </Alert>
                } 
        </div>
        
    )
}