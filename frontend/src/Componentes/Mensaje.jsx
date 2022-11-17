import React from "react";

import'../Estilos/index.css';

function Mensaje(){
    return(
        
    <div className="row text-center py-2">
  
<div id="wrapper">
<div id="menu">
    <p class="welcome">Bienvenido <b></b></p>
         <div Estilo="clear:both"></div>
    </div>
     
    <div id="chatbox"></div>
     <div className="container">
      <form name="message" action="">
        <input name="usermsg" type="text" id="usermsg" size="65" />
     <input name="submitmsg" type="submit"  id="submitmsg" value="Enviar"/>
    </form>   
     </div>
   
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript">

        </script>
</div>
   
        
     




    );
}
export default Mensaje;