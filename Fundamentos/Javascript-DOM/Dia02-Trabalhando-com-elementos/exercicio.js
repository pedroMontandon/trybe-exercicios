// Exercício 1: Criar h1 + Exercício 1 Bonus: criar a classe 'title'

    const title = document.createElement('h1');
    title.innerText = 'Exercício - JavaScript DOM';
    title.className = 'title';
    document.body.appendChild(title);

// Exercício 2: Adicione a tag main com a classe main-content como filho da tag body
    const main = document.createElement('main');
    main.className = 'main-content';
    document.body.appendChild(main);

//Exercício 3: Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
    const section = document.createElement('section');
    section.className = 'center-content';
    main.appendChild(section)
    console.log(main)

// Exercício 4: Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
    const p = document.createElement('p');
    p.innerText = 'algum texto';
    section.appendChild(p);

// Exercício 5: Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
    const section2 = document.createElement('section');
    section2.className = 'left-content';
    main.appendChild(section2);

// Exercício 6: Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
    const section3 = document.createElement('section');
    section3.className = 'right-content';
    main.appendChild(section3);

// Exercício 7: Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
    const image = document.createElement('img');
    image.className = 'small-image';
    image.src = 'https://picsum.photos/200'
    section2.appendChild(image);

// Exercício 8: Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
    const uList = document.createElement('ul');
    const arrayNumb = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let i = 0; i < arrayNumb.length; i += 1){
        const elementLi = document.createElement('li');
        elementLi.innerHTML = arrayNumb[i];
        uList.appendChild(elementLi);
    }
    section3.appendChild(uList);

// Exercício 9: Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. + Bonus 2 (adicionar classe description)
    for (i = 0; i < 3; i += 1){
        let titlesH3 = document.createElement('h3');
        titlesH3.className = 'description'
        main.appendChild(titlesH3);
    }

// Exercício 12: Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
    const removeLeftContent = document.getElementsByClassName('left-content')[0];
    main.removeChild(removeLeftContent);

// Exercício 13: Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
    const centralizeRightContent = document.getElementsByClassName('right-content')[0];
    centralizeRightContent.style.marginRight = 'auto';

// Exercício 14: Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
    const fatherBG = document.getElementsByClassName('center-content')[0];
    fatherBG.parentNode.style.backgroundColor = 'green';

// Exercício 15: Remova os dois últimos elementos (nove e dez) da lista criada no passo 8
