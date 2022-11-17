import React from "react";
import suuui from '../Imagenes/suuui.jpg';
import '../Estilos/index.css';
import { Link } from "react-router-dom";


function Profile(){
    return(
        <section class="">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-9 col-lg-7 col-xl-5">
              <div class="card" >
                <div class="navbar navbar-dark bg-dark p-4">
                  <div class="d-flex text-black">
                    <div class="flex-shrink-0">
                      <img src={suuui} alt="suuui.jpg"style={{maxWidth:"100px"}}  />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 class="mb-1">Maria palacio</h5>
                      <p class="mb-2 pb-1" >@marofly</p>
                      <div class="d-flex justify-content-start rounded-3 mb-2">
                        
                        <div class="px-3">
                          <p >Seguido</p>
                          <p class="mb-0">2</p>
                        </div>
                        
                      </div>
                      <div class="d-flex pt-1">
                        <Link to="/Mensaje">
                         <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                        </Link>
                       
                        </div>
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
export default Profile;