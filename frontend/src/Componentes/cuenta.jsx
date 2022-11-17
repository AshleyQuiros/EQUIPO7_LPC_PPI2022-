import React from "react";
import logo from '../Imagenes/logo 2.jpg';
import{ Link } from 'react-router-dom';

function cuentaH() {
    return(
 <div className="container">
   <div className="row">
   <img src={logo} alt="logo 2" className="mx-auto" style={{maxWidth: "500px"}}  />
        <div className="mx-auto text-center py-4">
           <h1>Crear cuenta como:</h1> 
        </div>
         <Link to="/registro">
   <div class="d-grid gap-2 col-6 mx-auto pb-3">
      <button type="button" class="btn btn-warning">  <b>Usuario</b></button>   
      </div>
   </Link>
 
  <Link to="/trabajador">
  <div class="d-grid gap-2 col-6 mx-auto pb-3">
  <button type="button" class="btn btn-warning"><b>Trabajador</b></button>
</div>
  </Link>
</div>
</div>
    );
}
export default cuentaH;