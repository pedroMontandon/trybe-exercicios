let renda = 36;
let cpv = 14;
const imposto = 0.8;
let lucro

if (renda - cpv > 0){
    lucro = ((renda - cpv) * imposto) * 1000;
    console.log("Este trimestre o lucro foi de R$" + lucro);
} else {
    console.log("Sua empresa está dando prejuízo")
}
