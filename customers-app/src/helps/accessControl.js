import React, { Component } from "react";
import { connect } from "react-redux";

export const accessControl = (permissionsRequired) => (WrappepComponent) => {
	// eslint-disable-next-line react/display-name
	const SecuredControl = class extends Component {
		render() {
			// eslint-disable-next-line react/prop-types
			const { permissions } = this.props.user;

			const isAllow = permissionsRequired.every((p) => permissions && permissions.indexOf(p) >= 0);

			if (!isAllow) {
				return (
					<div>
						<i>No tiene permiso de acceso</i>
					</div>
				);
			}
			return <WrappepComponent {...this.props} />;
		}
	};
	return connect((state) => ({ user: state.user }))(SecuredControl);
};
