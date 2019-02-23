import React from "react";
import { reduxForm, Field } from "redux-form";
import { PropTypes } from "prop-types";
import { setPropsAsInitial } from "../helps/setPropsAsInitial";

const isRequerid = (value) => !value && "Este campo es requerido!";

//meta.touched: propiedad de Field que indica si un componente ha sido tocado por el usuario
const MyField = ({ input, meta, type, label, name }) => (
	<div>
		<label htmlFor={name}>{label} </label>
		<input {...input} type={!type ? "text" : type} />
		{meta.touched && meta.error && (
			<span>
				<br /> {meta.error}
			</span>
		)}
	</div>
);

const isNumber = (value) => {
	return isNaN(Number(value)) && "El campo debe ser un numero";
};

const CustomerEdit = () => {
	return (
		<div>
			<h2>Editar cliente</h2>
			<form action="">
				<div>
					<Field name="name" component={MyField} label="Nombre" validate={isRequerid} />
				</div>
				<div>
					<Field name="dni" component={MyField} label="Cédula" validate={[isRequerid, isNumber]} />
				</div>
				<div>
					<Field name="age" component={MyField} label="Edad" validate={isNumber} />
				</div>
			</form>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

//No es un componente conectado porque no esta utilizando el state
// const mapStateToProps = (state, props) => ({
// 	initialValues: props
// });
// export default connect(mapStateToProps)(CustomerEditForm);

export default setPropsAsInitial(CustomerEditForm);
