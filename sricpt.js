const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

toggle.addEventListener('change', () => {
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});
