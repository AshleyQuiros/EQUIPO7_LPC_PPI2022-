import React from "react";
import tatto7 from '../Imagenes/tatto7.jpg';
import tatto8 from '../Imagenes/tatto8.jpg';
import tatto9 from '../Imagenes/tatto9.jpg';
import tatto10 from '../Imagenes/tatto10.jpg';
import tatto11 from '../Imagenes/tatto11.jpg';
import tatto12 from '../Imagenes/tatto12.jpg';
 function Idea(){
    return(
        <div className="row text-center py-3">
         
         <h1>Idea similares</h1>
        <div className="col-6 pb-2">
      <img src={tatto7} alt="tatto7.jpg" className="img-fluid" />
         </div>
    <div className="col-6 pb-2">
            <img src={tatto8} alt="tatto8.jpg" className="img-fluid"/>
          </div>
        
          < div className="col-6 pb-2">
      <img src={tatto9} alt="tatto9.jpg" className="img-fluid" />
         </div>
        
         
    <div className="col-6 pb-2">
            <img src={tatto10} alt="tatto10.jpg" className="img-fluid"/>
          </div>
          <div className="col-6 pb-2">
      <img src={tatto11} alt="tatto11.jpg" className="img-fluid" />
         </div>
    <div className="col-6 pb-2">
            <img src={tatto12} alt="tatto12.jpg" className="img-fluid"/>
          </div>
        
         </div>

   );
}
export default Idea;