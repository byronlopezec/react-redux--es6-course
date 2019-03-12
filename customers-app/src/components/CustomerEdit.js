import React from "react";
import { reduxForm, Field } from "redux-form";
import { PropTypes } from "prop-types";
import { setPropsAsInitial } from "../helps/setPropsAsInitial";
import CustomersActions from "../components/CustomersActions";
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

const validate = (values) => {
	const error = {};

	if (!values.name) error.name = "El campo Nombre es requerido!";
	if (!values.dni) error.dni = "El campo Cédula es requerido!";
	if (!values.age) error.age = "El campo Edad es requerido!";
	if (isNaN(Number(values.age))) {
		error.age = "El campo debe ser un numero";
	}

	return error;
};

const toNumber = (values) => values && Number(values);
const toUpper = (values) => values && values.toUpperCase();
const toLower = (values) => values && values.toLowerCase();
const onlyGrow = (value, previousValue) =>
	// eslint-disable-next-line no-console
	value && previousValue && value > previousValue ? value : previousValue;

const CustomerEdit = ({ handleSubmit, submitting, onBack }) => {
	return (
		<div>
			<h2>Editar cliente</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<Field name="name" component={MyField} label="Nombre" parse={toUpper} format={toLower} />
				</div>
				<div>
					<Field name="dni" component={MyField} label="Cédula" />
				</div>
				<div>
					<Field
						name="age"
						type="number"
						component={MyField}
						label="Edad"
						parse={toNumber}
						normalize={onlyGrow}
					/>
				</div>
				<CustomersActions>
					<button type="submit" disabled={submitting}>
						Aceptar
					</button>
					<button onClick={onBack}>Cancelar</button>
				</CustomersActions>
			</form>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
	onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(CustomerEdit);

//No es un componente conectado porque no esta utilizando el state
// const mapStateToProps = (state, props) => ({
// 	initialValues: props
// });
// export default connect(mapStateToProps)(CustomerEditForm);

export default setPropsAsInitial(CustomerEditForm);
