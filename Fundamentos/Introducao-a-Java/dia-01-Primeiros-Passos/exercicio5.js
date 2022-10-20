let peca = "Torre";
let pecav = peca.toLowerCase();

switch(pecav){
    case "peao":
        console.log ("um passo à frente")
        break;
    case "torre":
        console.log ("horizontais e verticais quantas casas quiser")
        break;
    case "bispo":
        console.log ("diagonais quantas casas quiser")
        break;
    case "cavalo":
        console.log ("move em L, movendo-se 4 casas no total")
        break;
    case "rainha":
        console.log ("move em diagonais, horizontais e verticais quantas casas quiser")
        break;
    case "rei":
        console.log ("move em diagonais, horizontais e verticais somente uma casa")
    default:
        console.log ("Erro, digite um nome válido")
}