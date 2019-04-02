import React from "react";
import PropTypes from "prop-types";
import CustomersActions from "./CustomersActions";
import { CUSTOMER_VIEW } from "../constants/users";
import { accessControl } from "../helps/accessControl";

const CustomerData = ({ id, name, dni, age, onBack, onDelete, isDeleteAllowed }) => {
	return (
		<div>
			<div className="customer-data">
				<h2>Datos del cliente </h2>
				<div>
					<strong>
						Nombre <i>{name}</i>
					</strong>
				</div>
				<div>
					<strong>
						CI <i>{dni}</i>
					</strong>
				</div>
				<div>
					<strong>
						Edad <i>{age}</i>
					</strong>
				</div>
				<CustomersActions>
					<button onClick={onBack}>Volver</button>
					{isDeleteAllowed && <button onClick={() => onDelete(id)}>Eliminar</button>}
				</CustomersActions>
			</div>
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
