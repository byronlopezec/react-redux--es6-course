import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class HomeContainer extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div>
				<h1>Home</h1>
				<Link to="/customers">Listado</Link>
			</div>
		);
	}
}
