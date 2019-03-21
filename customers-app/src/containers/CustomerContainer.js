import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers.selector";
import { Route, withRouter } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { fetchCustomers } from "../actions/fetchCustomers";
import { updateCustomer } from "../actions/updateCustomer";
import { deleteCustomer } from "../actions/deleteCustomer";
import { SubmissionError } from "redux-form";

class CustomerContainer extends Component {
	static propTypes = {
		fetchCustomers: PropTypes.func.isRequired,
		updateCustomer: PropTypes.func,
		dni: PropTypes.string.isRequired,
		customer: PropTypes.object
	};

	componentDidMount() {
		if (!this.props.customer) {
			this.props.fetchCustomers();
		}
	}

	handleSubmit = (values) => {
		const { id } = values;
		//Necesita ponerse un return para que el submitting pueda funcionar
		// de esta forma se desactiva el botton aceptar mientras retorna la promesa
		return this.props.updateCustomer(id, values).then((r) => {
			if (r.error) {
				throw new SubmissionError(r.payload);
			}
		});
	};

	handleOnBack = () => this.props.history.goBack();

	handleSubmitSuccess = () => this.props.history.goBack();

	handleOnDelete = () => this.props.deleteCustomer("05324578");

	renderCustomerControl = (isEdit, isDelete) => {
		if (this.props.customer) {
			let CustomerControl = isEdit ? CustomerEdit : CustomerData;
			//InitialValues es un propiedad de redux-form
			return (
				<CustomerControl
					{...this.props.customer}
					onSubmit={this.handleSubmit}
					onSubmitSuccess={this.handleSubmitSuccess}
					onBack={this.handleOnBack}
					// isDelete=Null => !isDelete=True => !!isDelete=False Real
					isDeleteAllowed={!!isDelete}
					onDelete={this.handleOnDelete}
				/>
			);
		}
		return null;
	};
	renderBody = () => (
		<Route
			path="/customers/:cedula/edit"
			// eslint-disable-next-line react/no-children-prop
			children={({ match: isEdit }) => (
				// match:isEdit creo un Alias al match
				<Route
					path="/customers/:cedula/delete"
					// eslint-disable-next-line react/no-children-prop
					children={({ match: isDelete }) => this.renderCustomerControl(isEdit, isDelete)}
				/>
			)}
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

const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = {
	fetchCustomers,
	updateCustomer,
	deleteCustomer
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(CustomerContainer)
);
