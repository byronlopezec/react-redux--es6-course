import React from "react";
import PropTypes from "prop-types";
import CustomersActions from "./CustomersActions";
import { CUSTOMER_VIEW } from "../constants/users";
import { accessControl } from "../helps/accessControl";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@material-ui/icons/Delete";

const CustomerData = ({ id, name, dni, age, onBack, onDelete, isDeleteAllowed }) => {
	return (
		<div className="Customer-data">
			<Card
				className="Card-customer-data"
				bg="dark"
				text="white"
				style={{
					margin: "auto",
					width: "24rem",
					WebkitBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
					MozBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
					boxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)"
				}}
			>
				<Card.Body className="text-center">
					<Form.Group as={Form.Row} controlId="formHorizontalName">
						<Form.Label column sm={4}>
							Name
						</Form.Label>
						<Col sm={8}>
							<Form.Control type="text" readOnly defaultValue={name} />
						</Col>
					</Form.Group>
					<br />
					<Form.Group as={Form.Row} controlId="formHorizontalDni">
						<Form.Label column sm={4}>
							Dni
						</Form.Label>
						<Col sm={8}>
							<Form.Control type="text" readOnly defaultValue={dni} />
						</Col>
					</Form.Group>
					<br />
					<Form.Group as={Form.Row} controlId="formHorizontalAge">
						<Form.Label column sm={4}>
							Age
						</Form.Label>
						<Col sm={8}>
							<Form.Control type="text" readOnly defaultValue={age} />
						</Col>
					</Form.Group>
					<br />
					<Form.Group>
						<CustomersActions>
							<ButtonToolbar>
								<Button
									style={{ margin: "auto", width: "100%" }}
									onClick={onBack}
									type="submit"
									variant="success"
								>
									Volver
								</Button>
								{isDeleteAllowed && (
									<Button
										style={{ margin: "auto", width: "100%" }}
										color="secondary"
										onClick={() => onDelete(id)}
										variant="danger"
									>
										Eliminar
										<DeleteIcon />
									</Button>
								)}
							</ButtonToolbar>
						</CustomersActions>
					</Form.Group>
				</Card.Body>
			</Card>
		</div>
	);
};

CustomerData.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	onBack: PropTypes.func.isRequired,
	isDeleteAllowed: PropTypes.bool,
	onDelete: PropTypes.func
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);
