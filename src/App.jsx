import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Secao1 } from './components/Secao/Secao1';
import { Secao2 } from './components/Secao/Secao2';
import { Secao3 } from './components/Secao/Secao3';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Pokemon } from './pages/Pokemon/Pokemon';
import { SuperHerois } from './pages/SuperHerois/SuperHerois';
import { Equipamentos } from './pages/Equipamentos/Equipamentos';
import { FormsProgramador } from './pages/FormsProgramador/FormsProgramador';


function App() {
  return (
    <div className="App"> 
     <ToastContainer />       
        <BrowserRouter>          
            <Routes>
              {/* aninhamento de rotas */}
              <Route path="/" element={<Root />} >
                <Route path='/' element={<Home />} >
                  <Route path='secao1' element={<Secao1 />} />
                  <Route path='secao2' element={<Secao2 />} />
                  <Route path='secao3' element={<Secao3 />} />
                </Route> 
                <Route path='/blog' element={<Blog />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/usuario/edit/:id' element={<EditaUsuario />} /> 
                  {/* :id -> parametro de rota */}
                <Route path='usuario/perfil/:id' element={<Perfil/>} />
                <Route path='/login' element={<Login />} />


                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/superherois" element={<SuperHerois />} />
                <Route path="/equipamentos" element={<Equipamentos />} />
                <Route path="/formsprogramador" element={<FormsProgramador />} />
                

                <Route path='*' element={<NotFound />} /> 
              </Route>             
            </Routes>
        </BrowserRouter>                   
    </div>
  );
}

export default App;
