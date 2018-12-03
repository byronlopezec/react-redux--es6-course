import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from '../Component/LocationList';
import { connect } from 'react-redux';
// import { setSelectedCity, setWeather } from './../Actions';
// Lo anterior se puede cambiar
import * as actions from './../Actions';
import { getWeatherCityList } from './../Reducers'
import { bindActionCreators } from 'redux';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setSelectedCity, setWeather, city, countries } = this.props;
        setWeather(countries)
        setSelectedCity(city)
    }

    handleSelectedLocation = (city) => {
        //en vez de enviar directamente una action, se envia un actionCreator que devuelve 
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <div>
                <LocationList
                    countries={this.props.cityListWeather}
                    onSelectedLocation={this.handleSelectedLocation}
                />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    countries: PropTypes.array.isRequired,
    cityListWeather: PropTypes.array.isRequired,
    setCity: PropTypes.func.isRequired,
};
LocationListContainer.defaultProps = {
    city: 'Quito,ec'
}

/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/


//Recibe un dispatch que a su vez retorna un objeto 
//El objeto tendra las funciones que vamos a invocar para crear las acciones
//================= bindActionCreators!!!!!!
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch)

// const mapDispatchToPropsActions = (dispatch) => {
//     return ({
//         //esta funcion recibe un parametro, invocamos un dispatch y recibe un action creator
//         setSelectedCity: value => dispatch(setSelectedCity(value)),
//         setWeather: cityList => dispatch(setWeather(cityList))
//     });
// }

//Connect es una funcion que espera dos funciones
// y asu vez devuelve otra funcion que espera le pasen un componente!!!
// Ahora el componente que vamos a exportar no es el App solamente
//export default App;
// Va a ser el componente con la habilidad de conectarse con el store
// const Appconnected = connect(null, mapDispatchToPropsActions)(App);
// Eliminamos //export default App; y exportamos el nuevo componente...
// export default Appconnected;
// Podemos simplificar aun mas una vez ya entendido el concepto

const mapStateToProps = state => ({
    cityListWeather: getWeatherCityList(state)
})
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);