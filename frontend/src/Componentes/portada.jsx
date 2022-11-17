import React from "react";
import logo from '../Imagenes/logo 2.jpg';
import{ Link } from 'react-router-dom';

function portada() {
    return(
 <div className="container">
   <div className="row">
   <img src={logo} alt="logo 2" className="mx-auto" style={{maxWidth: "600px"}}  />
   
   
   <Link to="/login">
   <div class="d-grid gap-2 col-6 mx-auto py-1">
      
   <button type="button" class="btn btn-warning">  <b>Iniciar sesión</b></button>   
      </div>
   </Link>
 
  <Link to="/cuenta">
  <div class="d-grid gap-2 col-6 mx-auto pb-1">
  <button type="button" class="btn btn-warning"><b>Registrarme</b></button>
</div>
  </Link>
</div>
</div>


 
    );
}
export default portada;