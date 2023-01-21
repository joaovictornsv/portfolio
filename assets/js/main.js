getTheme();

const checkbox = document.getElementById('theme-checkbox');

const rootCSS = document.documentElement.style;

checkbox.addEventListener('change', toggleTheme);

function getTheme() {
  const theme = localStorage.getItem('theme');
  setTimeout(() => {
    theme === 'light' ? setLightTheme() : setDarkTheme();
  }, 0)

}

function toggleTheme() {
  checkbox.checked ? setDarkTheme() : setLightTheme();
}

function setLightTheme() {
  rootCSS.setProperty('--primary', '#F0F5F9');
  rootCSS.setProperty('--tech-icon-bg', '#e4e8eb');
  rootCSS.setProperty('--secondary', '#212121');
  rootCSS.setProperty('--secondaryLight', '#393E46');
  localStorage.setItem('theme', 'light');
  checkbox.checked = false;
}

function setDarkTheme() {
  rootCSS.setProperty('--primary', '#212121');
  rootCSS.setProperty('--tech-icon-bg', '#3f3f3f');
  rootCSS.setProperty('--secondary', '#ececec');
  rootCSS.setProperty('--secondaryLight', '#e5e7e9');
  localStorage.setItem('theme', 'dark');
  checkbox.checked = true;
}