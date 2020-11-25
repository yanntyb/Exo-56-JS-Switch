let material = prompt("material ?")
let phrase = "j'utilise "


switch (material) {
    case "souris":
        alert(phrase + "une " + material);
        break;
    case "clavier":
        alert(phrase + "un " + material);
        break;
    case "ordinateur":
        alert(phrase + "un "+ material);
        break;
    case "tapis":
        alert(phrase + "un "+ material);
        break;
    case "imprimante":
        alert(phrase + "une "+ material);
        break;
    case "ondulateur":
        alert(phrase + "un "+ material);
        break;
    default:
        alert("non");
        break;
}
