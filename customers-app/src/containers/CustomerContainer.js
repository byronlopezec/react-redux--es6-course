import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers.selector";
import { Route } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
class CustomerContainer extends Component {
	static propTypes = {
		dni: PropTypes.string.isRequired,
		customer: PropTypes.object
	};

	renderBody = () => (
		<Route
			path="/customers/:cedula/edit"
			// eslint-disable-next-line react/no-children-prop
			children={({ match }) => {
				let CustomerControl = match ? CustomerEdit : CustomerData;
				//InitialValues es un propiedad de redux-form
				return <CustomerControl {...this.props.customer} />;
			}}
		/>
	);

	render() {
		return (
			<div>
				<AppFrame header={`Cliente ${this.props.dni}`} body={this.renderBody()} />
			</div>
		);
	}
}
CustomerContainer.defaultProps = {
	customer: {}
};

const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerContainer);
