import React from "react";
import{ Link } from 'react-router-dom';
import '../Estilos/index.css';
function Register() {
    return(
        <div className="container">
        <div className="row">
            <div className="mx-auto text-center py-4">
                <h1>Registrate</h1>
            
            </div>
            
             <div className="container pb-3">
                <div className="mx-auto"  style={{maxWidth: "500px"}}>
                <form class="row g-3" action="homeL" method="get">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label"><strong>Correo electronico o numero movil</strong></label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Ejemplo@gmail.com"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label"><b>Nombre completo</b></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="usuario"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"><b>Contraseña</b></label>
    <input type="password" class="form-control" id="inputPassword4"placeholder="Ingrese una contraseña"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"><b> Verifica la Contraseña</b></label>
    <input type="password" class="form-control" id="inputPassword4"placeholder="Verificar contraseña"/>
  </div>
 
  <div class="col-12">
   <section className="text-center py-3">
 <Link to="/homel">
 <button type="button" class="btn btn-warning">Registrate</button>
 </Link>
 
   </section>
  
  </div>
</form>
  
                    
                </div>

            </div>  
 
        </div>
  </div>
    );
}
export default Register;