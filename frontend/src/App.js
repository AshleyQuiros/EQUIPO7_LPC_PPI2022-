import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicios';
import Cursos from './Paginas/Cursos';
import Login from './Paginas/Login';
import Registro from './Paginas/Registro';
 import HomeL from './Paginas/HomeL';
 import Cuenta from'./Paginas/cuenta';
 import Trabajador from'./Paginas/Trabajador';
 import Perfil from'./Paginas/Perfil';
 import Estudio from'./Paginas/Estudio';
import MenuL from'./Paginas/MenuL';
import Guardado from'./Paginas/Guardado';
import Tatuaje from'./Paginas/Tatuaje';
import Idea from'./Paginas/Idea';
import Gallinas from'./Paginas/Gallinas';
import Mensaje from'./Paginas/Mensaje';
import Sol from'./Paginas/Sol';
import Arroz from'./Paginas/Arroz';
import Sopa from'./Paginas/Sopa';
import Tetero from'./Paginas/Tetero';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path= '/' element={<Inicio/>}/>
        <Route exact path='/cursos' element={<Cursos/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/homeL' element={<HomeL/>}/>
        <Route exact path='/cuenta' element={<Cuenta/>}/>
        <Route exact path='/trabajador' element={<Trabajador/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/estudio' element={<Estudio/>}/>
        <Route exact path='/menuL' element={<MenuL/>}/>
        <Route exact path='/guardado' element={<Guardado/>}/>
        <Route exact path='/tatuaje' element={<Tatuaje/>}/>
        <Route exact path='/idea' element={<Idea/>}/>
        <Route exact path='/gallinas' element={<Gallinas/>}/>
        <Route exact path='/sol' element={<Sol/>}/>
        <Route exact path='/arroz' element={<Arroz/>}/>
        <Route exact path='/sopa' element={<Sopa/>}/>
        <Route exact path='/tetero' element={<Tetero/>}/>
        <Route exact path='/mensaje' element={<Mensaje/>}/>
        

      
      
      </Routes>
    </Router>
  );
}

export default App;
