import React, { Component } from "react";

//HOC: Higher Order Componente: es una funcion que recibe un componente y retorna otro componente
export const setPropsAsInitial = (WrappedComponent) => {
	class NewComponente extends Component {
		render() {
			alert(JSON.stringify(this.props));
			//initialValues se inicia una sola vez
			//Por ello es necesario enableReinitialize para reiniciar con los primeros valores.
			// return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />;
			return <WrappedComponent {...this.props} initialValues={this.props} />;
		}
	}
	return NewComponente;
};
