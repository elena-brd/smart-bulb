const form = document.querySelector('form');
const formCard = document.querySelector('.form-card');
const mainCard = document.getElementById('main-card');

const btnAction = document.getElementById('btn-action')
const darkMode = document.querySelector('.dark-mode');
const light = document.querySelector('.light-mode')

function changeCard(e) {
  e.preventDefault();
  formCard.style.display = 'none';
  mainCard.style.backgroundColor = '#181818';
  darkMode.style.opacity = 1;
}


form.addEventListener('submit', changeCard);


btnAction.addEventListener('click', () => {
  darkMode.style.opacity = 0;
  light.style.opacity = 1;
  mainCard.style.backgroundColor = '#fff';
  darkMode.classList.toggle('light-mode');
})
