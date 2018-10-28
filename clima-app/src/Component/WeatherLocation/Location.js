import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';

// const Location = (props) => {
//     //const city = props.city;
//     const {city,country} = props; //destructuring

//     return  (<div><h1>{city},{country}</h1></div>);
// }

const Location = ({country}) => (
    //const city = props.city;
    <div className="locationCont"><h1>{country}</h1></div>
);

//Notacion mas facil
Location.propTypes = {

    country: PropTypes.string.isRequired
}

export default Location;