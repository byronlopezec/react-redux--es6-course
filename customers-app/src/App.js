import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
	renderHome = () => <h1>Home</h1>;
	renderCustomerListContainer = () => <h1>Customer List Container</h1>;
	renderCustomerContainer = () => <h1>Customers Container</h1>;
	renderCutomerNewContainer = () => <h1>Customer New Container</h1>;

	// <Link to="/Customer">Cliente</Link> <br />
	// <Link to="/Customer/3000">Cliente 3.000</Link>

	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={this.renderHome} />
					<Route exact path="/customers" component={this.renderCustomerListContainer} />
					<Route exact path="/customers/:dni" component={this.renderCustomerContainer} />
					<Route exact path="/cutomers/new" component={this.renderCutomerNewContainer} />
				</div>
			</Router>
		);
	}
}

export default App;
