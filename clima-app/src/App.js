import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';
//import LocationList from './Component/LocationList';

// const countries = [
//   "Quito,ec",
//   "Lima,pe",
//   "Buenos Aires,ar",
//   "Bogota,co"
// ]

class App extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          Grid System, xs, sm, md, lg
        </Row>
        <Row>
          <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
        </Row>
        {/* <Row center="xs"> Alinear al centro */}
        {/* <Row around="xs"> Deja espacios entre columnas */}
        {/* <Row between="xs"> a diferencia de around ocupa los filos y deja el mismo espacio entre columnas como en around */}
        <Row around="xs">
          {/* <Col xsOffset={6} xs > las primeros 6 columnas estan libres 
          y se dibujan las 4 columnas restantes en el resto de la pantalla */}
          <Col xs={2} >
            <div className="red"> </div>
          </Col>
          {/*<Col xs > Autosize al tamanio xtreme small */}
          <Col xs={2} >
            <div className="blue"> </div>
          </Col>
          <Col xs={2} >
            <div className="green"></div>
          </Col>
          <Col xs={2} >
            <div className="yellow"></div>
          </Col>
        </Row>
      </Grid>
    );
  }

  // handleSelectedLocation = (country) => {
  //   console.log("Estoy App.js handleSelectedLocation: " + country);
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <LocationList countries={countries} onSelectedLocation={this.handleSelectedLocation} />
  //     </div>
  //   );
  // }

}

/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/
export default App;
