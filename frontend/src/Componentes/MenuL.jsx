import React from "react";
import suuui from '../Imagenes/suuui.jpg';
import'../Estilos/index.css';

function MenuL(){
    return(
       <div className="container py-4">
        <div className="row">
           <div className="col-6 pb-2">
           <img src={suuui} alt="suuui.jpg"style={{maxWidth:"100px"}}  />
           </div>
        </div>
        <div className="container py-2">
            <h3>Nombre</h3>
        <i>Maria palacio</i>
         
         <h3>Nombre de usuario</h3>
         <i>@marofly</i>

         <h3>Correo electronico</h3>
         <i>maripalacio@gmail.com</i>

         <h3>Número de movil</h3>
         <i>3504203101</i>
          
          <h3>Contraseña</h3>
          <i>************</i>

         
        </div>
        </div> 
      
        
       
    );
}
export default MenuL;