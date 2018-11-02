import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';


const Location = ({country}) => (
    //const city = props.city;
    <div className="locationCont"><h1>{country}</h1></div>
);

//Notacion mas facil
Location.propTypes = {

    country: PropTypes.string.isRequired
}

export default Location;