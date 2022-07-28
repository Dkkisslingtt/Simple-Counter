import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import {useState} from 'react';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);


  const manejarClic = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        
        />
      </div>
      <div className="contenedor-principal">
        <Contador
          numClicks={numClicks}>
          
        </Contador>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
     
    </div>
  );
}

export default App;
