import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CustomerListItem = ({ dni, name, age, editAction, delAction, urlPath }) => {
	return (
		<TableRow key={dni}>
			<TableCell component="th" scope="row">
				{dni}
			</TableCell>
			<TableCell align="right">{name}</TableCell>
			<TableCell align="right">{age}</TableCell>
			<TableCell align="right">
				<Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
			</TableCell>
			<TableCell align="right">
				<Link to={`${urlPath}${dni}/delete`}>{delAction}</Link>
			</TableCell>
		</TableRow>
	);
};

CustomerListItem.propTypes = {
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	editAction: PropTypes.string.isRequired,
	delAction: PropTypes.string.isRequired,
	urlPath: PropTypes.string.isRequired
};

export default CustomerListItem;
