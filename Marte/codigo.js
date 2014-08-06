var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en marte?");

peso = prompt("¿Cuál es tu peso en kg?","70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert(pesoEnMarte);

//var nombre = "Kevin";
//var apellido = "Morales";
//var edad = 22;

//alert(nombre + " " + apellido + "\n" + edad + "años.");
//alert ("2" + 5 * 8);
