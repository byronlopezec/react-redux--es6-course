import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
import NewCustomerContainer from "./containers/NewCustomerContainer";
import Login from "./containers/Login";

class App extends Component {
	// renderHome = () => <h1>Home</h1>;
	// renderCustomerListContainer = () => <h1>Customer List Container</h1>;

	// <Link to="/Customer">Cliente</Link> <br />
	// <Link to="/Customer/3000">Cliente 3.000</Link>

	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/login" component={Login} />
					{/* exact permite indicar que el componente se muestre unicamente si la ruta es exacta */}
					{/* Route le pasas propiedades como history,location, al componente*/}
					{/* pero si se pone una funcion HomeContainer, esas propiedades de router no se pasan*/}
					{/* Para solucionar esto es necesario usar withRouter en el componente */}
					<Route exact path="/home" component={HomeContainer} />
					{/* lo que signifia que si yo pongo /customers se mostrara solamente el componente customersList */}
					{/* si le quito el exact a "/customers" se mostrara tanto el componente renderHome("/")  */}
					{/* y tambien el componente renderCustomerListContainer("/customers") */}
					<Route exact path="/customers" component={CustomersContainer} />
					{/* Switch toma la primera coicidencia valida y descarta el resto! */}
					<Switch>
						<Route path="/customers/new" component={NewCustomerContainer} />
						{/* <Route path="/customers/:cedula" component={CustomerContainer} /> */}
						<Route
							path="/customers/:cedula"
							render={(props) => <CustomerContainer dni={props.match.params.cedula} />}
						/>
						{/*
						params: {…}
						cedula: "1234567897"
						path: "/customers/:cedula"
					url: "/customers/1234567897"*/}
						<Redirect exact from="/" to="/Login" />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
