import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem/ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

class ForecastExtended extends Component {
    
    renderForecastItemDays(days) {

        return (
            days.map(day => <ForecastItem key={day} weekDay={day} />)
        );
    }
    render() {
        const city = this.props.city;
        return (
            <div>
                <h2 className='forecast-title'>Prognóstico extendido {city}</h2>
                {this.renderForecastItemDays(days)}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;