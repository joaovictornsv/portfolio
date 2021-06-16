const checkbox = document.getElementById('theme-checkbox');

const rootCSS = document.documentElement.style;

checkbox.addEventListener('change', toggleTheme);

function toggleTheme() {
  checkbox.checked ? setDarkTheme() : setLightTheme();
}

function setLightTheme() {
  rootCSS.setProperty('--primary', '#F0F5F9');
  rootCSS.setProperty('--secondary', '#212121');
  rootCSS.setProperty('--secondaryLight', '#393E46');
}

function setDarkTheme() {
  rootCSS.setProperty('--primary','#212121' );
  rootCSS.setProperty('--secondary', '#ececec');
  rootCSS.setProperty('--secondaryLight', '#e5e7e9');
}