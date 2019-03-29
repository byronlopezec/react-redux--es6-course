import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";
import Button from "@material-ui/core/Button";

class HomeContainer extends Component {
	static propTypes = {
		history: PropTypes.object
	};

	handleOnClick = () => {
		// eslint-disable-next-line no-console
		this.props.history.push("/customers");
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

//withRouter permite agregar 3 propiedades como history,location y match
export default withRouter(HomeContainer);
