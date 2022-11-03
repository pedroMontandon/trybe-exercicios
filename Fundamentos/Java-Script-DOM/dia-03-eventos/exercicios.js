const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Parte 1
  const createDaysOfTheMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysUl = document.querySelector('#days');

    for (let i = 0; i < decemberDaysList.length; i += 1){
        const days = decemberDaysList[i];
        const daysLi = document.createElement('li');
        daysLi.innerHTML = days;
        daysLi.classList.add('day')
        daysUl.appendChild(daysLi);

        if (days == 24 || days == 25 || days == 31){
            daysLi.classList.add('holiday');
        }
        if (days == 4 || days == 11 || days == 18 || days == 25){
          daysLi.classList.add('friday');
        }        
    }
}
createDaysOfTheMonth();

// Parte 2
const holidayButtonFunction = (buttonName) => {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  newButton.id = 'btn-holiday';

  newButton.innerHTML = buttonName;

  buttonContainer.appendChild(newButton);

}
holidayButtonFunction('Feriados');

//Parte 3
const holidayBackground = () => {
  const holidayButton = document.getElementById('btn-holiday');
  const holidays = document.querySelectorAll('.holiday');
  const oldBackground = 'rgb(238,238,238)';
  const newBackground = 'rgb(0, 100, 0, 0.4)';

  holidayButton.addEventListener('click', () => {
    for (let i = 0; i < holidays.length; i += 1){
      if (holidays[i].style.backgroundColor == newBackground){
        holidays[i].style.backgroundColor = oldBackground;
     } else {
      holidays[i].style.backgroundColor = newBackground;
     }
    }
  });
}
holidayBackground();

// Parte 4
const fridayButtonFunction = (buttonName) => {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  
  newButton.id = 'btn-friday';
  newButton.innerHTML = buttonName;

  buttonContainer.appendChild(newButton);
}
fridayButtonFunction('Sexta-Feira');

// Parte 5
const newFridayColor = () => {
  const fridayButton = document.querySelector ('#btn-friday')
  const fridays = document.querySelectorAll('.friday');
  const newColor = 'brown';
  const oldColor = '#777';

  fridayButton.addEventListener('click', () => {
  for (i = 0; i < fridays.length; i +=1){
    if (fridays[i].style.color == newColor){
      fridays[i].style.color = oldColor
    } else {
      fridays[i].style.color = newColor;
    }
  }
  });
}
newFridayColor();

// Parte 6
const dayZoom = () => {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '24px';
  event.target.style.fontWeight = '500';
  })
}
const dayZoomOut = () => {
  const days = document.querySelector('#days');
  
  days.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
  })
}
dayZoom();
dayZoomOut();

// Parte 7
const myTasks = (task) => {
  const taskContainer = document.querySelector('.my-tasks')
  const newTask = document.createElement('span');

  newTask.innerHTML = task;

  taskContainer.appendChild(newTask);
}
myTasks('cozinhar');

// Parte 8
const colorSub = (color) => {
  taskContainer = document.querySelector('.my-tasks');
  newTask = document.createElement('div');

  newTask.classList.add('task');
  newTask.style.backgroundColor = color;

  taskContainer.appendChild(newTask);
}
colorSub('red');

// Parte 9
const taskSelector = () => {
  taskReference = document.querySelector('.task');

  taskReference.addEventListener('click', (event) => {
    if(event.target.className === 'task selected'){
      event.target.classList.remove('selected')
      } else {
        event.target.classList.add('selected')
      }
  })
}
taskSelector();

// Parte 10
