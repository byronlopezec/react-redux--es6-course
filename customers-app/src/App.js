import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Link to="/Customer">Cliente</Link> <br />
					<Link to="/Customer/3000">Cliente 3.000</Link>
				</div>
			</Router>
		);
	}
}

export default App;
