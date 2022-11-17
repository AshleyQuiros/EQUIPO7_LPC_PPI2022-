import React from "react";
 import{ Link } from 'react-router-dom';


 
function CursosH(){
    return(
       
 <div className="container">
<div className="mx-auto text-center py-4">
           <h1>Ajustes</h1> 
        </div>
            <div className="row">
                 <Link to="/Guardado">
 <div class="d-grid gap-2 py-2"/>
<button class="btn btn-secondary" type="button">Guardados</button>
 </Link>

 <Link to="/MenuL">
 <div class="d-grid gap-2 py-2"/>
<button class="btn btn-secondary" type="button">Informacion de la cuenta</button>
 </Link>
            </div>

        </div>
    
 
        

       
 
 
       
        
    );
}
export default CursosH;