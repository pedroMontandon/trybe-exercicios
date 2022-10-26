// Exercício 1: Escreva "Bem-vinda, Margarida"

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log("Bem-vinda, " + info.personagem)  
console.log("-------------------------------------------")

// Exercício 2: Inserir uma nova propriedade e um novo valor (Recorrente: Sim)

info["recorrente"] = "Sim"
console.log(info)
console.log("-------------------------------------------")

// Exercício 3: Faça um for/in que mostre todas as chaves do objeto

for (let object in info){
  console.log(object)
}
console.log("-------------------------------------------")

// Exercício 4: Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto

for (let object in info){
  console.log(info[object])
}

console.log("-------------------------------------------")

// Exercício 5: Novo Objeto Tio Patinhas e Impressão em Conjunto

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let index in info, info2){
  if (info[index] == info2[index]) {
    console.log("Ambos recorrentes")
  } else {
    console.log(info[index] + " e " + info2[index])
  } 
}
console.log("-------------------------------------------")
// Exercício 6: Escrever "O Livro Favorito de Júlia Pessoa se chama 'O Pior de Todos'"

let leitor = {
  nome: 'Júlia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome, leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)
console.log("-------------------------------------------")

//Exercício 7: Adicione um novo livro favorito ao array

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")
