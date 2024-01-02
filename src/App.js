import './App.css';
import fccLogo from './img/fcc-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

  const [numeroClics, setNumeroClics] = useState(0);

  const manejarClic = () => {
    setNumeroClics(numeroClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
         className='fcc-logo'
         src={fccLogo}
         alt='' />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics={numeroClics} />

        <Boton
        text='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}  />

        <Boton
        text='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}  />
        
      </div>
    </div>
  );
}

export default App;
