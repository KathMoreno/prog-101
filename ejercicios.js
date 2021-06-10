const ejercicio1 = () => {
    console.log("Katherine");
};

const ejercicio2 = () => {
    console.log("Katherine\nCalle 34 bis #86-15 sur\n3014488127");
};

const ejercicio3 = () => {
    let words = [
        "Apple",
        "Boat",
        "Car",
        "Dinosaur",
        "External",
        "Face",
        "Goat",
        "House",
        "Island",
        "Joke",
    ]

    let palabras = [
        "Manzana",
        "Bote",
        "Auto",
        "Dinosaurio",
        "Externo",
        "Rostro",
        "Cabra",
        "Casa",
        "Isla",
        "Broma",
    ]

    for (let i = 0; i < words.length; i++) {
        console.log(`${words[i]} - ${palabras[i]}`);
    }
};

const ejercicio4 = () => {
    for (let i = 0; i < 9; i++) {
        let str = "";

        //Añade asteriscos
        for (let j = 0; j <= i; j++) {
            str = str + "*";
        }

        //Añade espacios: temp=temporal
        let temp = 9 - str.length;
        for (let k = 0; k < temp; k++) {
            str = str + " ";
        }

        let arrayStr = str.split("");
        let reversedArrayStr = arrayStr.reverse();
        str = reversedArrayStr.join("")+ str;

        console.log(str);
    }
};

const ejercicio5 = () => {
    console.log("    *    ");
    console.log("   * *   ");
    console.log("  *   *  ");
    console.log(" *     * ");
    console.log("*********");
}

let responseMenu = parseInt(
    prompt("¿Qué ejercicio quieres ver?")
);

switch(responseMenu) {
    case 1:
        ejercicio1();
        break;

    case 2:
        ejercicio2();
        break;

    case 3:
        ejercicio3();
        break;

    case 4:
        ejercicio4();
        break;
    
    case 5:
        ejercicio5();
        break;

    default:
        console.log("Ejercicio incorrecto");
        break;
}