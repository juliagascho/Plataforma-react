import { useState } from "react";
import { Alert, InputGroup, Modal} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FormsProgramador.css"

export function FormsProgramador() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [progr, setProgr] = useState();


    function onSubmitProgr(progr) {
        setProgr(progr);        
    }
    return (
        <div className='body'>
    
            <h3 className='titulo'>Cadastre-se</h3>
    
            <Form className='form'  onSubmit={handleSubmit(onSubmitProgr)}>

                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome completo:</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui seu nome completo" {...register("nome", { required: true, maxLength: 255 })}/> 
                    {errors.nome && <span className="invalid">Digite um nome válido</span> }      
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control type="text" placeholder="login@email.com" aria-describedby="inputGroupPrepend" required/>
                        <Form.Control.Feedback type="invalid"> Informe um e-mail válido</Form.Control.Feedback>
                    </InputGroup>
                    {/* <Form.Control type="email" placeholder="login@email.com" {...register("email", { required: true })} />  
                    {errors.email && <span className="invalid">Digite um nemail válido</span> }         */}
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="tel" placeholder="(99)99999-9999" {...register("telefone", { required: true })} />
                    {errors.telefone && <span className="invalid">Digite um nome válido</span> }  
                </Form.Group>

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui seu estado de residência" {...register("estado", { required: true, maxLength: 255 })} /> 
                    {errors.estado && <span className="invalid">Digite um estado válido</span> }         
                </Form.Group>

                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui sua cidade de residência" {...register("cidade", { required: true, maxLength: 255 })} />  
                    {errors.cidade && <span className="invalid">Digite uma cidade válida</span> }        
                </Form.Group>

                <Form.Group className="mb-3" controlId="interesses">
                    <Form.Label>Áreas de interesse</Form.Label>
                    <Form.Check  type="checkbox" label="Front-end"/>
                    <Form.Check  type="checkbox" label="Back-end"/> 
                    <Form.Check  type="checkbox" label="Full-stack"/>      
                </Form.Group>

                <Form.Group className="mb-3" controlId="nivel">
                    <Form.Select {...register("nivel")}>
                        <option>Selecione seu nível de experiência:</option>
                        <option value="jr">Júnior</option>
                        <option value="pl">Pleno</option>
                        <option value="sr">Sênior</option>
                    </Form.Select>    
                </Form.Group>

                <Form.Group className="mb-3" controlId="portfolio">
                    <Form.Label>Portfólio:</Form.Label>
                    <Form.Control type="link" placeholder="Digite aqui o link para seu portfólio" {...register("portfolio", { required: true, maxLength: 255 })} />  
                    {errors.portfolio && <span className="invalid">Digite endereço válido</span> }        
                </Form.Group>


                <Form.Group className="mb-3" controlId="botaoCadastrar">                   
                    <Button className='entrar' variant="secondary" type="submit" >
                        Cadastrar
                    </Button>                        
                </Form.Group>
    
            </Form>

            {progr && 
                <Modal.Dialog variant="danger" className="text-primary">
                    <Modal.Header closeButton>
                    <Modal.Title>Novo programador cadastrado:</Modal.Title>
                    </Modal.Header>
            
                    <Modal.Body>
                        <ul>
                            <li>Nome: {progr.nome}</li>
                            <li>Email: {progr.emai}</li>
                            <li>Telefone: {progr.telefone}</li>
                            <li>Estado: {progr.estado}</li>
                            <li>Cidade: {progr.cidade}</li>
                            <li>Interesses: {progr.interesses}</li>
                            <li>Nível: {progr.nivel}</li>
                            <li>Portfólio: {progr.portfolio}</li>
                        </ul>
                    </Modal.Body>
            
                    <Modal.Footer>
                    <Button variant="secondary">Fechar</Button>                    
                    </Modal.Footer>
                </Modal.Dialog>
                } 
        </div>
      )
    }

   