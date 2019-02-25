import React, { Component } from "react";

//HOC: Higher Order Componente: es una funcion que recibe un componente y retorna otro componente
export const setPropsAsInitial = (WrappedComponent) => {
	class NewComponente extends Component {
		render() {
			//initialValues se inicia una sola vez
			return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />;
		}
	}
	return NewComponente;
};
