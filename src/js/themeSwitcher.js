const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
  bodyRef.classList.add(`${Theme.DARK}`);
  toggleRef.setAttribute('checked', 'true');
} else {
  bodyRef.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}
toggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (toggleRef.getAttribute('checked') === 'true') {
    toLightTheme();
  } else toDarkTheme();
}

function toLightTheme() {
  toggleRef.setAttribute('checked', 'false');
  bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}
function toDarkTheme() {
  toggleRef.setAttribute('checked', 'true');
  bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}
