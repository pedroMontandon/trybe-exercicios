backgroundColorArray = ['white', 'black', 'green', 'blue', 'yellow'];
fontColorArray = ['black', 'red', 'white'];
fontSizeArray = ['8pt', '10pt', '12pt', '14pt', '20pt'];
lineSpacingArray = ['1', 'normal', '1.5', '2.0', '3.0'];
fontFamilyArray = ['arial', 'times new roman'];

const backgroundSection = document.querySelector('#backColorUl');

const backgroundButtonCreation = () => {
  for (let i = 0; i < backgroundColorArray.length; i += 1){
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.classList.add('backgroundColorButton');
    button.innerHTML = backgroundColorArray[i];
    button.id = backgroundColorArray[i];


    backgroundSection.appendChild(li);
    li.appendChild(button);
  }
}
backgroundButtonCreation();

const backgroundColorSelection = () => {
  const backgroundButton = document.querySelector('#backColorUl');  
  
  backgroundButton.addEventListener('click', function (event){
    let selected = event.target.id;
    document.body.style.backgroundColor = selected;
    localStorage.setItem('backColor', JSON.stringify(selected));
  });
}
backgroundColorSelection();

window.onload = () => {
  const backgroundSaved = JSON.parse(localStorage.getItem('backColor'));
  console.log(backgroundSaved)
  document.body.style.backgroundColor = backgroundSaved;
};
