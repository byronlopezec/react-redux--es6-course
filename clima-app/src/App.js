import React from 'react';
import './App.css';
import LocationList from './Component/LocationList';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <WeatherLocation/>
//       </div>
//     );
//   }
// }

const country = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]
  

const App = () => {
  return (
    <div className="App">
      <LocationList country={country}/>
    </div>
  );
}
/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/
export default App;
