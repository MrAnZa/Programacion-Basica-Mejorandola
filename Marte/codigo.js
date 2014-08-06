// Un simple codigo para saber cuál sería tu peso en marte
// Declaramos variables
var peso;
var pesoEnMarte;

// Con alert le preguntamos al usuario
alert("¿Quieres saber tu peso en marte?");

// Con prompt volvemos a preguntar al usuario, esta vez esperando una respuesta
peso = prompt("¿Cuál es tu peso en kg?","70");
peso = parseInt(peso);

// Hacemos el calculo del peso
pesoEnMarte = (peso / 9.81) * 3.711;

//Luego mostramos.
alert(pesoEnMarte);
