// Exercício 1: Ligar e Desligar Motor de Carro
let motorLigado = "desligado"

const ligarDesligar = () => (motorLigado == "desligado" ? motorLigado = "ligado" : motorLigado = "desligado")

console.log(`O motor está ${motorLigado}`)

console.log('---------------Exercício 2-----------------')

// Exercício 2: Criar Função que Calcule Área do Círculo
const pi = 3.14

const circleArea = (raio) => {
    return pi * raio **2
}

console.log (`Essa é a área do círculo: ${circleArea(3)}`)
console.log (`Essa é a área do círculo: ${circleArea(5)}`)
console.log('---------------Exercício 3-----------------')

// Exercício 3: Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const longestWord = (sentence) => {
    let myArray = sentence.split(" ")
    let selectWord = myArray[0]
    for (i = 0; i < myArray.length; i++){
        if (myArray[i].length > selectWord.length){
            selectWord = myArray[i]
        }
    }

    return selectWord
}




console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))