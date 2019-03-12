/* eslint-disable no-console */
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.listen(4000, () => {
	console.log("JSON Server is running");
});

server.put("/customers/1234567897", (req, res) => {
	let body = [];
	req.on("data", (chunk) => {
		body.push(chunk);
	}).on("end", () => {
		body = JSON.parse(Buffer.concat(body).toString());
		console.log(JSON.stringify(body));
		if (body.age && body.age > 26) {
			console.log("error de validación");
			return res.send({
				error: true,
				validation: {
					age: "Debe ser menor de 26 anios"
				}
			});
		} else {
			res.send("ok");
		}
	});
});

server.use(router);
