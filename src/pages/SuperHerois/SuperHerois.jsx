
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function SuperHerois() {

    const { register, handleSubmit } = useForm();
    const [heroi, setHeroi] = useState();
    
    // function onSubmitSuperHerois(data) {
    //     let mensagem = `
    //         Novo Super-herói cadastrado!
    //         Nome: ${data.nome}
    //         Poder: ${data.poder}
    //         Fraqueza: ${data.fraqueza}
    //         História: ${data.historia}
    //     `;
    //     alert(mensagem);

    function onSubmitSuperHerois(heroi) {    
        setHeroi(heroi)  
    };

    return (
        <div className="superherois">
            <h1>Cadastro de Super-Heróis</h1>
            <form onSubmit={handleSubmit(onSubmitSuperHerois)} noValidate>
                <label htmlFor="nome">Nome</label> <br />
                <input type="text" id="nome" {...register("nome")}/> <br />
                
                <label htmlFor="poder">Poder</label> <br />
                <input type="text" id="poder" {...register("poder")} /> <br />

                <label htmlFor="fraqueza">Fraqueza</label> <br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /> <br />

                <label htmlFor="historia">História</label> <br />
                <input type="text" id="historia" {...register("historia")} /> <br />

                <button type="submit">Cadastrar</button> <br />
            </form>

            {heroi && 
                <Alert variant="danger">
                    Novo Super-herói cadastrado! <br />
                    Nome: ${heroi.nome} <br />
                    Poder: ${heroi.poder} <br />
                    Fraqueza: ${heroi.fraqueza} <br />
                    História: ${heroi.historia} <br />
                </Alert>
            } 
        </div>
    )
}