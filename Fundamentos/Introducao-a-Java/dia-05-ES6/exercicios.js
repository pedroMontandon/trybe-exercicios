// Exercício 1: Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa = {
        nome: 'Luna',
        idade: 19
      } // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
      console.log("----------Exercício 2 -------------")

// Exercício 2: Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const
const pessoa2 = {
    nome: 'Henri',
    idade: 20
  }

  pessoa2.nome = "Luna";
  pessoa2.idade = 19
  console.log("----------Exercício 3 -------------")

// Exercício 3: Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa2.nome);
  console.log('Idade:', pessoa2.idade);
  console.log("----------Exercício 4 -------------")

// Exercício 4: Transforme em Arrow Function
  const numeroAleatorio = () =>  Math.random()
  console.log(numeroAleatorio());

  console.log("----------Exercício 5 -------------")
  
  // Exercício 5: Transforme em Arrow Function
  const hello = (nome) => `Olá, ${nome}!`
  let nome = 'Ivan';
  console.log(hello(nome));

  console.log("----------Exercício 6 -------------")

// Exercício 6: transforme em arrow function
const nomeCompleto = (nome2, sobrenome) => `${nome} ${sobrenome}`
  let nome2 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

  console.log("----------Exercício 7 -------------")

  // Exercício 7: Altere if/else
let speed = 90;
    const speedCar = (speed) => (
      speed >= 120 ? `você ultrapassou o limite de velocidade`: `você está na velocidade permitida`)
    ;
    console.log(speedCar(speed));
