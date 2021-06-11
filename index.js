const escribeTuNombre = () => {
    let myName = prompt("Ingresa tu nombre");
    console.log(myName);
}

const perrosOGatos = () => {
    let responseAnimal = prompt("¿Qué animal eres?");

    switch(responseAnimal) {
        case "perro":
            console.log("Guau");
            break;
            
        case "gato":
            console.log("Miaw");
            break;

        default:
            console.log ("Eche no joa");
            break;
    }
}

const claseFor = () => {
    let movies = [
        "Luna de miel en familia",
        "Escuadrón suicida",
        "Maléfica",
        "Terminator  Genesys",
        "Star Treck: Sin límites",
        "Capitán Phillips",
        "La quinta ola",
        "El arte de robar",
        "The martian",
        "Sospechosos"
    ]

    for (let i = 0; i < movies.length; i++) {
        console.log(`${i}. ${movies[i]}`);

        if (movies[i] == "The martian") {
            console.log("Qué buena pelicula")
        } else {
            console.log("F");
        }
    }
}

const menu = () => {
    let responseMenu = parseInt(
        prompt("¿Qué quieres hacer?\n1.Imprimir tu nombre\n2.¿Qué animal eres?")
    );
    
    switch(responseMenu) {
        case 1:
            escribeTuNombre();
            break;
    
        case 2:
            perrosOGatos();
            break;
    
        default:
            console.log("Opciòn errónea");
            break;
    
    }
}
const buttonStart = document.getElementById("button-start");
buttonStart.addEventListener("click", menu);

