import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem/ForecastItem';

class ForecastExtended extends Component {
    render() {
        const city = this.props.city;
        return (
            <div>
                <h2 className='forecast-title'>Prognóstico extendido {city}</h2>
                <ForecastItem />
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;