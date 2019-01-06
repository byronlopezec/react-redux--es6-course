import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div>
			<h2>Editar cliente</h2>
			<form action="">
				<div>
					<label htmlFor="">Nombre: </label>
					<Field name="name" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="">Cédula: </label>
					<Field name="dni" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="">Edad: </label>
					<Field name="age" component="input" type="number" />
				</div>
			</form>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
};

export default reduxForm({ form: "CustomerEdit" })(CustomerEdit);
