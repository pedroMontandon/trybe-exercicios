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