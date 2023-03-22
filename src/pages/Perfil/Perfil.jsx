import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { Link, useParams } from "react-router-dom";

export function Perfil() {

    let params = useParams();
    let id = params.id;
    
    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); 
    })

        // ou:
        // usuarios.find(usuario => usuario.id === parseInt(id));

    return(
        <div className="perfil-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant='dark'>
                <Link to="/usuarios">Voltar</Link>                
            </Button>
        </div>
    )
}