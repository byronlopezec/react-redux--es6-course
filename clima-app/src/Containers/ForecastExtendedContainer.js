import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../Component/ForecastExtended';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city ?
                <ForecastExtended
                    city={this.props.city}
                /> :
                <div>
                    <h2 className="initTitleDetail" align="center">Prognóstico Extendido </h2>
                    <h3 className="initTitleDetail" align="center"> Click on City </h3>
                </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string,
};

// const mapStateToProps = state => ({ city: state.city });
// const mapStateToProps = ({ city }) => ({ city: city });
//Destructuring
const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);