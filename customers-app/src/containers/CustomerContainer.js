import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";

export class CustomerContainer extends Component {
	static propTypes = {
		prop: PropTypes.func
	};

	render() {
		return (
			<div>
				<AppFrame header={"Cliente"} body={<p>Datos del cliente</p>} />
			</div>
		);
	}
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerContainer);
