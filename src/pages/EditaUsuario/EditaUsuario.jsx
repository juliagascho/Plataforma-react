import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario() {

    let params = useParams();
    let id = params.id;
    
    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna um valor booleano que satisfaz a pesquisa
    })
    console.log(usuario)
    // o find vai retornar o usuario que tem aquele id, retorna o objeto inteiro
    //parseInt() é pra transformar a string do id em numero, params normalmente retorna uma string, e nesse caso transformamos para numero


    let navegador = useNavigate();
    //usenavigate é uma função que retorna uma função
    // a função de retorno tem capacidade de navegar entre as rotas da aplicação
    //a gente passa pra ela qual a rota que queremos ser direcionados
    function editar(){
        // captar as informações do formulário
        // validar dados de entrada
        // modificar as informações no banco de dados
        navegador("/usuarios")
    }
    
    return(
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={editar} variant='dark'>Editar</Button>
            {/* clicando no botao vai redicrecionar para a pagina de usuarios, que é o que pedimos no navigate */}
        </div>
    )
}