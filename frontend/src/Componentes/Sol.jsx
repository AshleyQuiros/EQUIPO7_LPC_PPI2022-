import React from "react";
import tatto6 from '../Imagenes/tatto6.jpg';
import{ Link } from 'react-router-dom';
import'../Estilos/index.css';

function Sol(){
    return(
      <div className="row text-center py-3">
         
        <div class="flex-shrink-0">
      <img src={tatto6} alt="tatto6.jpg"style={{maxWidth:"300px"}}  />
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
export default Sol;