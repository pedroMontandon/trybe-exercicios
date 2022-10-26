// Exercício 1: Quadrado Equilatero 5 por 5

let n = 5
let linha = ""

for (i = 0; i < n; i++){
    linha = "";
    for (i2 = 0; i2 < n; i2++){
        linha += "*"
    }
    console.log(linha)
}

// Exercício 2: Triângulo

let n2 = 5;
let linha2 = "";

for (i = 0; i < n2; i++){
    linha2 = ""
    for (c = 0; c <=i; c++){
        linha2 += "*";
    }
    console.log(linha2)
}

// Exercício 3: Triângulo invertido

let n3 = 5;
let linha3 = "";

for (i = n3; i > 0; i--){
    linha3 = ""
    for (c = 0; c <= n3; c++){
        if (c >= i){
            linha3 += "*";
        } else {
            linha3 += " ";
        }
    }
    console.log(linha3);
}

// Exercício 4: Pirâmide

let n4 = 5;
let linha4 = ""

for ()