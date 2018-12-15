import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body }) => {
	return (
		<div>
			<div className="app-frame">
				<AppHeader title={header}></AppHeader>
				<div>{body}</div>
				<div>Aplicación Simple de ejemplo!</div>
			</div>
		</div>
	);
};

AppFrame.propTypes = {
	title: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	footer: PropTypes.string.isRequired,
	body: PropTypes.element.isRequired,
};

export default AppFrame;
