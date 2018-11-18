import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';
import LocationList from './Component/LocationList';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './Component/ForecastExtended'
import { createStore } from 'redux';
import {actionCreator} from './Actions'

const countries = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]

// Para usar la extension Redux Devtools Extension en chrome se usa:
// window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
const store = createStore( () => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor() {
    super();//antes de usar cualquier this, esto llama al constructor de component he inicializa state.
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = (city) => {
    this.setState({ city: city });
    console.log(`handleSelectedLocation ${city}`)

    //envez de enviar directamente una action, se envia un actionCreator que devuelve 
    store.dispatch(actionCreator(city));
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'> Weather App </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} >
            <LocationList countries={countries} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6} >
            <Paper elevation={6}>
              <div className="details">
                {/* city !== null ? similarA: !city */}
                {
                  city ? <ForecastExtended city={city}></ForecastExtended> :
                    <div>
                      <h2 className="initTitleDetail" align="center">Prognóstico Extendido </h2>
                      <h3 className="initTitleDetail" align="center"> Click on City </h3>
                    </div>
                }
              </div>
            </Paper>
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
