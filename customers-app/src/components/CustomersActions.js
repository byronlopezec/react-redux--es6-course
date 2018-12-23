import React from 'react';
import PropTypes from 'prop-types';
//react-router-dom contiene a react-router
//la nueva version react-router-dom es utilizada tambien para react native
const CustomersActions = ({ children }) => {
	return (
		<div>
			<div className='customers-actions'>
				<div>{children} </div>
			</div>
		</div>
	);
};

CustomersActions.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CustomersActions;
