import React from "react";
import PropTypes from "prop-types";

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div>
			<h2>Editar cliente</h2>
			<h3>
				Nombre: {name} / Cedula: {dni} / Edad: {age}
			</h3>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
};

export default CustomerEdit;
