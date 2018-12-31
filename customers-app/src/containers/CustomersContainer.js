import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "./../actions/fetchCustomers";

const customers = [
	{ dni: "1234567897", name: "Lopez Byron", age: 26 },
	{ dni: "1722450779", name: "Erika Lima", age: 28 },
	{ dni: "1702216876", name: "Santiago Proanio", age: 24 },
	{ dni: "0532659877", name: "Juan Vera", age: 18 },
	{ dni: "1702216871", name: "Maria Idalgo", age: 32 },
	{ dni: "1702216872", name: "Jose Flores", age: 17 }
];

class CustomersContainer extends Component {
	static propTypes = {
		history: PropTypes.object,
		fetchCustomers: PropTypes.func.isRequired
	};

	componentDidMount = () => {
		this.props.fetchCustomers();
	};

	handleAddNew = () => {
		this.props.history.push("/customers/new");
	};

	renderBody = (customers) => {
		return (
			<div>
				<CustomersActions>
					<Button
						variant="contained"
						color="primary"
						className="button-list-clients"
						onClick={this.handleAddNew}
					>
						Nuevo Cliente
					</Button>
				</CustomersActions>
				<br />
				<CustomerList customers={customers} urlPath={"customers/"} />
			</div>
		);
	};

	render() {
		return (
			<div>
				<AppFrame header={"Lista Clientes"} body={this.renderBody(customers)} />
			</div>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
	fetchCustomers
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(CustomersContainer)
);
