import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomerListItem = ({ name, editAction, delAction, urlPath, dni }) => {
	return (
		<div>
			<div className="customer-list-item">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/delete`}>{delAction}</Link>
				</div>
			</div>
		</div>
	);
};

CustomerListItem.propTypes = {
	name: PropTypes.string.isRequired,
	editAction: PropTypes.bool.isRequired,
	delAction: PropTypes.bool.isRequired,
	urlPath: PropTypes.string.isRequired,
	dni: PropTypes.number.isRequired
};

export default CustomerListItem;
