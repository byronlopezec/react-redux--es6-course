import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

export default class HomeContainer extends Component {
	static propTypes = {
		// prop: PropTypes
	};

	handleOnClick = () => {
		// eslint-disable-next-line no-console
		console.log("HandleOnClick");
	};

	render() {
		return (
			<div>
				<AppFrame
					header="Home"
					body={
						<div>
							Este es la pantalla inicial
							<CustomersActions>
								<button onClick={this.handleOnClick}>Listar Clients!!</button>
							</CustomersActions>
						</div>
					}
				/>
			</div>
		);
	}
}
