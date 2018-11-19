import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LocationList from './Component/LocationList';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './Component/ForecastExtended';
import { setCityActionCreator } from './Actions';
import PropTypes from 'prop-types';

const countries = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]

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

    //en vez de enviar directamente una action, se envia un actionCreator que devuelve 
    this.props.setCity(city);
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
// Validaciones para que nuestro componente sea consistente:
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/


//Recibe un dispatch que a su vez retorna un objeto 
//El objeto tendra las funciones que vamos a invocar para crear las acciones
const mapDispatchToPropsActions = (dispatch) => {
  return ({
    //esta funcion recibe un parametro, invocamos un dispatch y recibe un action creator
    setCity: value => dispatch(setCityActionCreator(value))
  });
 }
//Connect es una funcion que espera dos funciones
// y asu vez devuelve otra funcion que espera le pasen un componente!!!
// Ahora el componente que vamos a exportar no es el App solamente
//export default App;
// Va a ser el componente con la habilidad de conectarse con el store
// const Appconnected = connect(null, mapDispatchToPropsActions)(App);
// Eliminamos //export default App; y exportamos el nuevo componente...
// export default Appconnected;
// Podemos simplificar aun mas una vez ya entendido el concepto
export default connect(null, mapDispatchToPropsActions)(App);
