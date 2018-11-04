import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ForecastExtended extends Component {
    render() {
        const city = this.props.city;
        return (<div>Prognóstico extendido {city}</div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;