import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";
import Button from "@material-ui/core/Button";

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
								<Button
									variant="contained"
									onClick={this.handleOnClick}
									color="primary"
									className="button-list-clients"
								>
									List Clients
								</Button>
							</CustomersActions>
						</div>
					}
				/>
			</div>
		);
	}
}
