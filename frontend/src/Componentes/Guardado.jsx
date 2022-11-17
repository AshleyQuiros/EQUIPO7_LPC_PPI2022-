import React from "react";
import tatto4 from '../Imagenes/tatto4.jpg';
import'../Estilos/index.css';

function Guardado(){
    return(
<div className="container">
    <h1>Guardado</h1>
    <div class="flex-shrink-0">
                      <img src={tatto4} alt="tatto4.jpg"style={{maxWidth:"200px"}}  />
                    </div>
</div>
    );
}
export default Guardado;