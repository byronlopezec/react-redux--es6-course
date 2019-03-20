import React, { Component } from "react";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { insertCustomer } from "../actions/insertCustomer";
import { SubmissionError } from "redux-form";

class NewCustomerContainer extends Component {
	handleSubmit = (values) => {
		values.id = values.dni;
		return this.props.insertCustomer(values).then((r) => {
			if (r.error) {
				throw new SubmissionError(r.payload);
			}
		});
	};

	handleOnSubmitSuccess = () => {
		this.props.history.goBack();
	};

	handleOnBack = () => {
		this.props.history.goBack();
	};

	renderBody = () => {
		return (
			<CustomerEdit
				onSubmit={this.handleSubmit}
				onSubmitSuccess={this.handleOnSubmitSuccess}
				onBack={this.handleOnBack}
			/>
		);
	};
	render() {
		return (
			<div>
				<AppFrame header={"Agregar Nuevo Cliente"} body={this.renderBody()} />
			</div>
		);
	}
}

NewCustomerContainer.propTypes = {
	history: PropTypes.object.isRequired,
	insertCustomer: PropTypes.func.isRequired
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	insertCustomer
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewCustomerContainer)
);
