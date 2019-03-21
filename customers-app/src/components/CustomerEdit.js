import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { PropTypes } from "prop-types";
import { setPropsAsInitial } from "../helps/setPropsAsInitial";
import CustomersActions from "../components/CustomersActions";
import { Prompt } from "react-router-dom";

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

	return error;
};

const isNumber = (value) => isNaN(Number(value)) && "El campo debe ser un número";
const toNumber = (values) => values && Number(values);
const toUpper = (values) => values && values.toUpperCase();
const toLower = (values) => values && values.toLowerCase();
const onlyGrow = (value, previousValue) =>
	value && (!previousValue ? value : value > 18 ? Number(value) : Number(previousValue));

class CustomerEdit extends Component {
	componentDidMount() {
		if (this.cuadroFoco) {
			this.cuadroFoco.focus();
		}
	}

	render() {
		const { handleSubmit, submitting, onBack, submitSucceeded, pristine } = this.props;

		return (
			<div>
				<h2>Editar cliente</h2>
				Ejemplo Foco texto: <input ref={(txt) => (this.cuadroFoco = txt)} type="text" />
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
							validate={isNumber}
							parse={toNumber}
							label="Edad"
							normalize={onlyGrow}
						/>
					</div>
					<CustomersActions>
						<button type="submit" disabled={pristine || submitting}>
							Aceptar
						</button>
						<button type="button" disabled={submitting} onClick={onBack}>
							Cancelar
						</button>
					</CustomersActions>
					{/* Cuando se halla modificado un cambio en los fields pristine nos informa */}
					{/* submitSucceeded, asegura que no se realice cuando se envíe correctamente el formulario */}
					<Prompt when={!pristine && !submitSucceeded} message="Se perderán los cambios!" />
				</form>
			</div>
		);
	}
}
CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
	onBack: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	submitSucceeded: PropTypes.bool.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(CustomerEdit);

//No es un componente conectado porque no esta utilizando el state
// const mapStateToProps = (state, props) => ({
// 	initialValues: props
// });
// export default connect(mapStateToProps)(CustomerEditForm);

export default setPropsAsInitial(CustomerEditForm);
