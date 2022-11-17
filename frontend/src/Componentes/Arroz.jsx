import React from "react";
import tatto from '../Imagenes/tatto.jpg';
import{ Link } from 'react-router-dom';
import'../Estilos/index.css';

function Arroz(){
    return(
      <div className="row text-center py-3">
        <div class="flex-shrink-0">
      <img src={tatto} alt="tatto.jpg"style={{maxWidth:"300px"}}  />
                    </div>
                    <div className="container">
                    <div class="form-floating py-5">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
                        
                        </div>
                        <Link to="/Idea">
   <div class="d-grid gap-2 col-6 mx-auto py-1">
      
   <button type="button" class="btn btn-warning">  <b>Ideas similares</b></button>   
      </div>
   </Link>
   <Link to="/Guardado">
   <div class="d-grid gap-2 col-6 mx-auto py-1">
      
   <button type="button" class="btn btn-warning">  <b>Guardar</b></button>   
      </div>
   </Link>
                    </div>
                        
                  
                     
        
       
    );
}
export default Arroz;