// Exercício 1: Função Palíndromo

function verificaPalindromo(word){
    for (let i = 0; i < word.length/2; i++ ){
        if (word[i] == word[word.length - i - 1]){
            return true
        } else {
            return false
        }
    }   
}
console.log(verificaPalindromo("arara"))
console.log(verificaPalindromo("desenvolvimento"))
console.log("--------------------------------------------------")

// Exercício 2: Retornar o índice de maior valor
let number;
let index;

function bigNumber(array){
    number = array[0]
    for (let i =0; i < array.length; i++)
        if (array[i] > number){
            number = array[i];
            index = i 
        }
        return index
}

console.log ("O índice que contém o menor valor é: " + bigNumber([2, 3, 6, 7, 10, 1]));
console.log("--------------------------------------------------")

// Exercício 3: Retornar o índice de menor valor

function smaNumber(array){
    number = array[0];
    for (let i =0; i < array.length; i++)
        if (array[i] < number){
            number = array[i];
            index = i 
        }
        return index
}
console.log ("O índice que contém o menor valor é: " + smaNumber([2, 4, 6, 7, 10, 0, -3]));
console.log("--------------------------------------------------")

// Exercício 4: Retornar nome com maior quantidade de caracteres
let names = "";

function bigName(array){
    for (let i = 0; i < array.length; i++)
        if (array[i].length > names.length){
            names = array[i]; 
        }
        return names
}
console.log ("O nome com o maior número de caracteres é: " + bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log("--------------------------------------------------")

// Exercício 5: Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
