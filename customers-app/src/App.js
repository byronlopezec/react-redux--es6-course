import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
	renderHome = () => <h1>Home</h1>;
	renderCustomerListContainer = () => <h1>Customer List Container</h1>;
	renderCustomerContainer = () => <h1>Customers Container</h1>;
	renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

	// <Link to="/Customer">Cliente</Link> <br />
	// <Link to="/Customer/3000">Cliente 3.000</Link>

	render() {
		return (
			<Router>
				<div className="App">
					{/* exact permite indicar que el componente se muestre unicamente si la ruta es exacta */}
					<Route exact path="/" component={this.renderHome} />
					{/* lo que signifia que si yo pongo /customers se mostrara solamente el componente customersList */}
					{/* si le quito el exact a "/customers" se mostrara tanto el componente renderHome("/")  */}
					{/* y tambien el componente renderCustomerListContainer("/customers") */}
					<Route exact path="/customers" component={this.renderCustomerListContainer} />
					{/* Switch toma la primera coicidencia valida y descarta el resto! */}
					<Switch>
						<Route path="/customers/new" component={this.renderCustomerNewContainer} />
						<Route path="/customers/:dni" component={this.renderCustomerContainer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
