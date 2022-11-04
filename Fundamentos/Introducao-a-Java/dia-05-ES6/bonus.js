// Exercício 1: Criar duas funções

const substituaX = (nome) => {
    const frase = "Tryber X aqui!";
    let fraseSeparada = frase.split(" ");
    for (let i = 0; i < fraseSeparada.length; i++){
        fraseSeparada[i] == "X" ? fraseSeparada[i] = nome : fraseSeparada[i] = fraseSeparada[i]
    }
    return fraseSeparada.join(" ")
}

const minhasSkills = (substituaX) => {
    const skills = ["JavaScript", "CSS", "HTML"]
    return `${substituaX} Minhas três principais habilidades são: ${skills}`
}

console.log(minhasSkills(substituaX("Bebeto")))

