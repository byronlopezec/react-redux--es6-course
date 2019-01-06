import React, { Component } from "react";

//HOC: Higher Order Componente: es una funcion que recibe un componente y retorna otro componente
export const setPropsAsInitial = (WrappedComponent) => {
	class NewComponente extends Component {
		render() {
			return <WrappedComponent {...this.props} initialValues={this.props} />;
		}
	}
	return NewComponente;
};
