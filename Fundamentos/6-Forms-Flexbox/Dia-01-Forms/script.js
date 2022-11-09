const submit = (event) => {
  event.preventDefault();
};

const submitButton = () => {
    button = document.getElementById('submitButton');

    button.addEventListener('click', (submit));
};
submitButton();
