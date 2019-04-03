import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Prompt } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { PropTypes } from "prop-types";
import { CUSTOMER_EDIT } from "../constants/users";
import { setPropsAsInitial } from "../helps/setPropsAsInitial";
import CustomersActions from "../components/CustomersActions";
import { accessControl } from "../helps/accessControl";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import classNames from "classnames";

const validate = (values) => {
	const error = {};

	if (!values.name) error.name = "El campo Nombre es requerido!";
	if (!values.dni) error.dni = "El campo Cédula es requerido!";

	return error;
};

const isNumber = (value) => isNaN(Number(value)) && "El campo debe ser un número";
const toNumber = (values) => values && Number(values);
const toUpper = (values) => values && values.toUpperCase();
// const toLower = (values) => values && values.toLowerCase();
const onlyGrow = (value, previousValue) =>
	value && (!previousValue ? value : value > 18 ? Number(value) : Number(previousValue));

class CustomerEdit extends Component {
	//NO UTILIZAR COMPONENTES NO CONTROLADOS DE FORMA GENERAL!!!
	componentDidMount() {}
	//meta.touched: propiedad de Field que indica si un componente ha sido tocado por el usuario
	renderField = ({ input, meta: { touched, invalid, error }, type, label, ...autoFocus }) => {
		return (
			<TextField
				inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
				InputLabelProps={{ style: { fontFamily: "Arial", color: "Gray" } }}
				margin="normal"
				{...autoFocus}
				label={label}
				type={!type ? "text" : type}
				error={touched && invalid}
				helperText={touched && error}
				{...input}
			/>
		);
	};

	render() {
		const { handleSubmit, submitting, onBack, submitSucceeded, pristine, classes } = this.props;

		return (
			<div>
				<Card
					className="text-white"
					bg="dark"
					text="white"
					style={{
						margin: "auto",
						width: "25rem",
						height: "25rem",
						WebkitBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
						MozBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
						boxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)"
					}}
				>
					<form
						onSubmit={handleSubmit}
						style={{
							margin: "auto"
						}}
					>
						<div>
							<Field
								autoFocus
								name="name"
								component={this.renderField}
								label="Nombre"
								parse={toUpper}
								// format={toLower}
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
							<Button
								variant="contained"
								type="submit"
								color="primary"
								size="medium"
								disabled={pristine || submitting}
								className={classes.button}
							>
								<SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
								Guardar
							</Button>
							<Button
								variant="contained"
								color="secondary"
								size="medium"
								className={classes.button}
								disabled={submitting}
								onClick={onBack}
							>
								Cancelar
							</Button>
						</CustomersActions>
						{/* Cuando se halla modificado un cambio en los fields pristine nos informa */}
						{/* submitSucceeded, asegura que no se realice cuando se envíe correctamente el formulario */}
						<Prompt when={!pristine && !submitSucceeded} message="Se perderán los cambios!" />
					</form>
				</Card>
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
	submitSucceeded: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired
};

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	},
	iconSmall: {
		fontSize: 20
	}
});

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(CustomerEdit);

//No es un componente conectado porque no esta utilizando el state
// const mapStateToProps = (state, props) => ({
// 	initialValues: props
// });
// export default connect(mapStateToProps)(CustomerEditForm);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(withStyles(styles)(CustomerEditForm)));
