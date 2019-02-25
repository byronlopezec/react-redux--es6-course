//Funcion que rotarna otra función
export const apiGet = (url) => () => fetch(url).then((response) => response.json());
export const apiPut = (url, dni, obj) => () =>
	fetch(`${url}/${dni}`, {
		method: "PUT",
		body: JSON.stringify(obj),
		headers: new Headers({ "Content-type": "application/json" })
	}).then((v) => v.json());
