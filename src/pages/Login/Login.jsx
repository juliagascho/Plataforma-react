
import { useNavigate } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { usuarios } from "../../data/usuarios"; //aqui chamei os dados da pasta usuarios.js
import { toast } from 'react-toastify';

export function Login() {

    const navigate = useNavigate(); // para usar o navigate é preciso declarar aqui e importar o useNavigate
    
    const handleSubmit = (event) => {  //Esta função handleSubmit receberá os dados do formulário se a validação do formulário for bem-sucedida.
        event.preventDefault();  //impede que ele envie o formulário antes de passar pela validação
        const email = event.target.loginEmail.value;
        const senha = event.target.loginSenha.value;
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);
        if (usuarioEncontrado) {
        navigate('/');  //vai para home
        } else {
        toast.error('Erro ao autenticar!');  //para o toast funcionar tem que instalar: npm install react-toastify, importar esse toast ali em cima e VER ARQUIVO APP tem dois imports de toast lá e mais um 'toastcontainer' na div
        
        }
    };

  return (
    <div className='body'>

        <h3 className='titulo'>Entre em sua conta!</h3>

        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="login@email.com" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginSenha">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="Digite aqui a sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="botaoEntrar">
                <div className='d-flex justify-content-between'>
                    <div><input type="checkbox" name="remember" id="remember" /><label for="remember" class="text-muted">Lembrar-me</label> 
                    </div>
                    <Button className='entrar' variant="secondary" type="submit" >
                        Entrar
                    </Button>
                </div>      
            </Form.Group>

            <Form.Group className="forgot" controlId="forgot">                 
                    <a href="#" id="forgot" class="font-weight-bold d-flex justify-content-end">Esqueceu sua senha?</a>                
            </Form.Group>

            <Form.Group className="text-center m-5" controlId="loginExterno">               
                    <p>Você também pode fazer login com:</p>
                        <a href="https://wwww.facebook.com" target="_blank" className="px-2">
                            <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"/> 
                        </a> 
                        <a href="https://www.google.com" target="_blank" className="px-2"> 
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"/> 
                        </a>
                        <a href="https://www.github.com" target="_blank" className="px-2"> 
                            <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"/> 
                        </a>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginCadastrar">
                <div className='row d-flex justify-content-center'>
                    <p className="mb-0 text-center">Não possui conta?</p>
                    <p className="mb-0 text-center">
                        <a href="#" className="text-white-50 fw-bold">Clique aqui</a> e faça seu cadastro
                    </p>            
                </div>       
                </Form.Group>
        </Form>
    </div>
  )
}

