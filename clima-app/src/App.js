import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';
import LocationList from './Component/LocationList';

const countries = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]

class App extends Component {

  handleSelectedLocation = (country) => {
    console.log("Estoy App.js handleSelectedLocation: " + country);
  }

  render() {
    return (
      <Grid>

        <Row center="xs">
          <h1>
            WEATHER APP
        </h1>
        </Row>
        <Row>
          <Col xs={12} md={6} >
            <div className="App">
              <LocationList countries={countries} onSelectedLocation={this.handleSelectedLocation} />
            </div>
          </Col>
          <Col xs={12} md={6} >
            <div className="details">

            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

}

/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/
export default App;
