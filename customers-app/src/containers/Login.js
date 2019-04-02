import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { getDataUser } from "./../actions/getDataUser";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = { validated: false, email: "", password: "", existEmail: false };
	}

	handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();

		if (form.checkValidity()) {
			let { email } = event;
			this.props
				.getDataUser(email)
				.then(() => {
					this.props.history.push("/home");
				})
				.catch(() => {
					alert("User doesn't exist!");
				});
		}
		this.setState({ validated: true });
	};

	handleCheck = (event) => {
		// eslint-disable-next-line no-console
		console.log(event);
	};

	render() {
		const { validated } = this.state;
		let email = "";
		let password = "";

		return (
			<div
				className="Login"
				// style={{display: "flex",justifyContent: "center",minHeight: "23rem" }}
			>
				<Card className="Card" border="primary">
					<Card.Header>
						<h2>Login</h2>
					</Card.Header>
					<Card.Body>
						<Form
							noValidate
							validated={validated}
							onSubmit={(e) => {
								e.email = email;
								e.password = password;
								return this.handleSubmit(e);
							}}
						>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									autoFocus={true}
									required
									onChange={(e) => {
										email = e.target.value;
									}}
									type="email"
									placeholder="Enter email"
								/>
								<Form.Control.Feedback type={"invalid"}>{"Incorrect email"}</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									required
									onChange={(e) => {
										password = e.target.value;
									}}
									type="password"
									placeholder="Password"
								/>
								<Form.Control.Feedback type="invalid">Incorrect password!</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicChecbox">
								<Form.Check type="checkbox" label="Check me out" onClick={this.handleCheck} />
							</Form.Group>

							<Button className="Button-submit" variant="primary" type="submit">
								SIGN IN
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

Login.propTypes = {
	history: PropTypes.object.isRequired,
	getDataUser: PropTypes.func
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	getDataUser
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Login)
);
