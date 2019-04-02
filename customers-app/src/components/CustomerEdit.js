import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { PropTypes } from "prop-types";
import { setPropsAsInitial } from "../helps/setPropsAsInitial";
import CustomersActions from "../components/CustomersActions";
import { Prompt } from "react-router-dom";
import { accessControl } from "../helps/accessControl";
import { CUSTOMER_EDIT } from "../constants/users";

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
	//NO UTILIZAR COMPONENTES NO CONTROLADOS DE FORMA GENERAL!!!
	componentDidMount() {
		if (this.cuadroFoco) {
			this.cuadroFoco.focus();
		}
	}
	//meta.touched: propiedad de Field que indica si un componente ha sido tocado por el usuario
	renderField = ({ input, meta, type, label, name, withFocu }) => (
		<div>
			<label htmlFor={name}>{label} </label>
			<input {...input} type={!type ? "text" : type} ref={withFocu && ((txt) => (this.cuadroFoco = txt))} />
			{meta.touched && meta.error && (
				<span>
					<br /> {meta.error}
				</span>
			)}
		</div>
	);

	render() {
		const { handleSubmit, submitting, onBack, submitSucceeded, pristine } = this.props;

		return (
			<div>
				<h2>Editar cliente</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							withFocu={true} // o simplemente withFocu
							name="name"
							component={this.renderField}
							label="Nombre"
							parse={toUpper}
							format={toLower}
						/>
					</div>
					<div>
						<Field name="dni" component={this.renderField} label="Cédula" />
					</div>
					<div>
						<Field
							name="age"
							type="number"
							component={this.renderField}
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

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));
