// Criando Itens
// Prática 1: Crie um elemento irmão do Elemento Onde Você Está

const pai = document.getElementById('pai');
const newSiblingElemento = document.createElement('section');
newSiblingElemento.id = 'newSiblingElemento';
pai.appendChild(newSiblingElemento);

console.log(newSiblingElemento);

// Prática 2: Crie um Filho para ElementoOndeVoceEsta

const filho = document.getElementById('elementoOndeVoceEsta');
const newChildElemento = document.createElement('section');
newChildElemento.id = 'newChildElemento';
elementoOndeVoceEsta.appendChild(newChildElemento);

console.log(elementoOndeVoceEsta)

// Prática 3: Crie um Filho para primeiroFilhoDoFilho

const filho2 = document.getElementById('primeiroFilhoDoFilho');
const newChildPrimeiroFilho = document.createElement('section');
newChildPrimeiroFilho.id = 'newChildPrimeiroFilho';
primeiroFilhoDoFilho.appendChild(newChildPrimeiroFilho);

console.log(primeiroFilhoDoFilho);

// Prática 4:

const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);