import React from "react";
import barco from '../Imagenes/barco.jpg';
import tatto13 from '../Imagenes/tatto13.jpg';
import '../Estilos/index.css';

function Gallinas(){
    return(
  
    
        <section class="navbar navbar-dark bg-dark p-4">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="navbar navbar-dark bg-dark p-4">
                <div class="navbar navbar-dark bg-dark p-4">
            <div class="ms-4 mt-5 d-flex flex-column" >
              <img src= {barco}  alt="barco.jpg" class="img-fluid img-thumbnail mt-4 mb-2"/>
             
            </div>
            <div class="ms-3">
              <h5>Andy Perez</h5>
              <p>Medellin</p>
            </div>
          </div>
          <div class="navbar navbar-dark bg-dark p-4"/>

          <div class="p-4 text-white" >
            <div class="d-flex justify-content py-1">
              <div>
                <p class="mb-1 h5">1</p>
                <p class="small text-muted mb-0">fotos</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">12</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              
            </div>
          </div>
          <div class="card-body p-4 text-white">
            <div class="mb-5">
              <p class="lead fw-normal mb-1">Descripción</p>
              <div class="p-4" >
              <p class="font-italic mb-1">Los recuerdo no solo se llevan en la mente, si no tambien en la piel  </p>
                <p class="font-italic mb-1">Medellin</p>
                <p class="font-italic mb-0">Tatuador</p>
               
                    
               
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">fotos recientes </p>
             </div>
            <div class="row g-2">
              <div class="col mb-2">
                <img src= {tatto13}
                  alt="tatto13.jpg" class="w-100 rounded-3"/>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
export default Gallinas;