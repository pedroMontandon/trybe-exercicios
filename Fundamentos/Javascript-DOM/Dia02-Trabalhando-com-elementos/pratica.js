// Prática 1
console.log(document.getElementById('elementoOndeVoceEsta'));
  
// Prática 2
let praColor = document.getElementById('elementoOndeVoceEsta').parentNode;
praColor.style.color = 'red';

// Prática 3
let childText = document.getElementById('primeiroFilhoDoFilho');
childText.innerText = 'Primeiro Filho do Filho';

// Prática 4
let firstChildDad = document.getElementById('pai'.firstChildDad);

// Prática 5

let firstChildOrigin = document.getElementById('elementoOndeVoceEsta'.previousElementSibling);

// Prática 6
let atentionOrigin = document.getElementById('elementoOndeVoceEsta'.nextSibling);

// Prática 7
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// Prática 8
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);

// Criando Itens
// Prática 1: Crie um elemento irmão do Elemento Onde Você Está

/* const pai = document.getElementById('pai');
const newSiblingElemento = document.createElement('section');
newSiblingElemento = newSiblingElemento.id;
pai.appendChild(newSiblingElemento);

console.log(newSiblingElemento) */
