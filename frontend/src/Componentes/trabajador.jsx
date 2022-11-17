import React from "react";
import{ Link } from 'react-router-dom';
import logo from '../Imagenes/logo 2.jpg';
import '../Estilos/index.css';
function Trabajador() {
    return(
     <div className="container">
        <div className="row">
        <img src={logo} alt="logo 2" className="mx-auto" style={{maxWidth: "300px"}}  />
        <div className="mx-auto text-center py-4">
           <h1>Registrarme</h1> 
        </div>
    
                <div className="mx-auto"  style={{maxWidth: "500px"}}>
                <form class="row g-3" action="homeL" method="get">

                <form class="row g-3">
  <div class="col-md-2">
    <label for="inputEmail4" class="form-label">Correo electronico</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="usuario@gmail.com"/>
     </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Nombre completo</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="usuario"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Número movil</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="32054****"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="inputAddress2" placeholder="fs4***s"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Cedula</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234***"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Ubicacion del estudio</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="CL 53 C CR 123 C-60"/>
  </div>  
 </form>
 <p>Adjutar papeles legales</p>
 <div class="input-group py-2">
  
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Enviar</button>
</div>
  <div class="col-12">
   <section className="text-center py-4">
 <Link to="/Gallinas">
 <button type="button" class="btn btn-warning">Registrate</button>
 </Link>
 
   </section>
  
  </div>
</form>
  
                    
                </div>

            </div>  
            </div>
            
           
 
        
  
    );
}
export default Trabajador;