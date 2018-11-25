import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import LocationListContainer from './Containers/LocationListContainer';
import ForecastExtendedContainer from './Containers/ForecastExtendedContainer';

const countries = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]

class App extends Component {


  render() {
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
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;