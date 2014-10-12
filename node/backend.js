var basededatos = {
	usuario: "kevin",
	password: "mejorandola",
}

console.log("Arracando server de Node");

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use( parcero.urlencoded() )
var servidor;

servidor = web.listen(8080, function (){
	console.log("servidor arrancado :P");
});

web.get("/", function (req, res){
	res.sendfile("formulario.html");
});

web.post("/entrar", function (req, res){
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bienvenido al area prohibida");
	}
	else
	{
		res.send("Shu, shu, fuera de aqui!");
	}
});

//Prueba de urls :P

web.get("/hola/mama-es-linda", function (req, res){
	res.send("Hola <strong>mamá</strong>, estoy triunfando");
});