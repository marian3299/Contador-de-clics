import React from "react";
import '../styles/Boton.css'

function Boton ({text, esBotonDeClic, manejarClic}){
  return(
    <button
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {text}
    </button>  
  );    
}

export default Boton;