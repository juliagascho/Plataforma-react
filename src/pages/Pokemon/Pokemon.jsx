import { useForm } from "react-hook-form";
import "./Pokemon.css"

export function Pokemon() {

    // Expressão regular:
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { register, handleSubmit, formState: { errors } } = useForm();
    // use form vai retornar um objeto
    // useForm vai criar um estado para cada campo
    // register e handleSubmit são duas propriedades retornadas pelo useForm

    //esse objeto de errors vai identificar se o campo não foi preenchido e não envia os dados enquanto não for preenchido

    function onSubmitPokemon(data) {
        console.log(data);
    }

    // handleSubmit: é responsável por intermediar a captura dos dados do formulário e agrupá-los em um objeto 'data' e passar para a função de tratamento 'onSubmit'

    // onSubmit: vai ocorrer quando clicar no botao submit:
    // handleSubmit: função que retorna uma função, ele vai capturar os valores do formulario, e transformar esse objeto data // ele traz os dados dos campos
    // handleSubmit retorna a função que eu quero executar, passando os dados para essa função
    // função onSubmit colocado dentro de handleSubmit porque ela que vai ser executada 

   
    return (
        <div className="pokemon">
            <h1>Cadastro de Pokemon</h1>
            <form onSubmit={handleSubmit(onSubmitPokemon)} noValidate>
                <label htmlFor="nome">Nome</label> <br />
                <input type="text" id="nome" {...register("nome", { required: true, maxLength: 255 })}/> <br />
                {/* register vai colocar o atributo name e os eventos de change - vai registrar o meu campo
                register é uma função que retorna as mudanças no campo.  Recebe o nome do campo, vai criar um estado desse campo */}
                {/* precisa usar o spread ... pois ele joga os dados no campo */}
                {errors.nome &&  <span className="invalid">Digite um nome válido!</span> } <br />
                {/* errors.nome indica se há erro no campo nome */}

                <label htmlFor="tipo">Tipo</label> <br />
                <input type="text" id="tipo" {...register("tipo", { required: true, maxLength: 255 })} /> <br />
                {errors.tipo &&  <span className="invalid">Digite um tipo válido!</span> } <br />
                
                <label htmlFor="altura">Altura</label> <br />
                <input type="number" id="altura" {...register("altura", { required: true, min: 0 })} /> <br />
                {errors.altura &&  <span className="invalid">Digite uma altura válida!</span> } <br />
               
                <label htmlFor="peso">Peso</label> <br />
                <input type="number" id="peso" {...register("peso", { required: true, min: 0 })} /> <br />
                {errors.peso &&  <span className="invalid">Digite um peso válido!</span> } <br />

                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" {...register("email", { required: true, pattern: patternEmail})} /> <br />
                {errors.email &&  <span className="invalid">Digite um email válido!</span> } <br />
                
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}