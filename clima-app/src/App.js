import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './Component/ForecastExtended';
import LocationListContainer from './Containers/LocationListContainer';

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
            <LocationListContainer countries={countries} />
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

export default App;