import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";

class CustomerContainer extends Component {
	static propTypes = {
		dni: PropTypes.string.isRequired,
		customer: PropTypes.object
	};

	render() {
		// let { dni, customer } = this.props;
		return (
			<div>
				<AppFrame
					header={`Cliente ${this.props.dni}`}
					body={<p>Datos del cliente: {this.props.customer.name}</p>}
				/>
			</div>
		);
	}
}
CustomerContainer.defaultProps = {
	customer: {}
};

const mapStateToProps = (state, props) => ({
	customer: state.customers.find((c) => c.dni === props.dni)
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerContainer);
