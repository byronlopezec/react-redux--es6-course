import React, { Component } from "react";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NewCustomerContainer extends Component {
	handleSubmit = () => { };

	handleOnSubmitSuccess = () => { };

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
	history: PropTypes.object.isRequired
};

export default withRouter(connect(null,null)( NewCustomerContainer));