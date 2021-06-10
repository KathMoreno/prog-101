const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// console.log("Hello world");

// Declaraciòn de variable con let:
let myName = "Katherine Moreno";
console.log(myName);

// Declaraciòn de constante con const
const myNameAsConst = "Katherine Moreno Dospuntostres";
console.log(myNameAsConst);

/* readline.question recibe dos parámetros, la pregunta que queremos hacer
    y la función callback a ejecutar*/
// \n significa new line o salto de línea
readline.question("Ingresa el nombre de tu mascota\n", function(petName) {
    console.log(" El nombre de tu mascota es: " + petName)
    readline.close();  
});
