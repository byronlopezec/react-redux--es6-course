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
          <Col xs={12} sm={6} md={4} >
            <div className="red"> </div>
          </Col>
          <Col xs={12} sm={6} md={4} >
            <div className="blue"> </div>
          </Col>
          <Col xs={12} sm={6} md={4} >
            <div className="green"></div>
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
