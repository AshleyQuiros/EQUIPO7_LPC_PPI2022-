import React from "react";
import { Link } from 'react-router-dom';
import tatto from '../Imagenes/tatto.jpg';
import tatto2 from '../Imagenes/tatto2.jpg';
import tatto3 from '../Imagenes/tatto3.jpg';
import tatto4 from '../Imagenes/tatto4.jpg';
import tatto5 from '../Imagenes/tatto5.jpg';
import tatto6 from '../Imagenes/tatto6.jpg';
import '../Estilos/index.css';
function InicioL() {
    return (
<div className="hearder">
     <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
   <Link class="navbar-brand">
<i>
    Tatto Master
</i>
   </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/Perfil">Perfil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/cursos">Ajustes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Mensaje">Mensaje</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Estudio">Buscar Estudio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/">Cerrar sesión</Link>
        </li>
      </ul>
      
    </div>
    
  </div>

      </nav>
      <div className="container py-2">
        <form class="d-flex" role="search">
        <input class="form-control " type="Search" placeholder="Buscar imagen" aria-label="Search"/>
     <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      </div>

    
        <div className="row text-center py-3">
        <Link to="/Arroz">
           <div className="col-6 pb-3">
            <img src={tatto} alt="tatto.jpg" className="img-fluid" />
       </div>
        </Link>
        <Link to="/Sopa">
          <div className="col-6 pb-3">
            
          <img src={tatto2} alt="tatto2.jpg" className="img-fluid"/>
        </div>
        </Link>
  
       <Link to="/Tatuaje">
        < div className="col-6 pb-3">
          
    <img src={tatto4} alt="tatto4.jpg" className="img-fluid" />
       </div>
       </Link>
       <Link to="/Tetero">
         <div className="col-6 pb-3">
          <img src={tatto3} alt="tatto3.jpg" className="img-fluid"/>
        </div>
       </Link>
       <Link to="/Sol">
        <div className="col-6 pb-3">
          <img src={tatto6} alt="tatto6.jpg" className="img-fluid"/>
        </div>
      
       </Link>
        <div className="col-6 pb-3">
    <img src={tatto5} alt="tatto5.jpg" className="img-fluid" />
       </div>
  
       </div>
    


    </div>









    );
}
export default InicioL;