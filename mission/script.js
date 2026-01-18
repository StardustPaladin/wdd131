let themeButton = document.querySelector('#theme-toggle');
let pageContent = document.querySelector('body');
let logoImage = document.querySelector('#logo');

themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    if (pageContent.classList.contains('dark-mode')) {
        pageContent.classList.remove('dark-mode');
        themeButton.textContent = '🌙';
        logoImage.src = 'images/byui-logo-blue.webp';
        localStorage.setItem('theme', 'light');
    } else {
        pageContent.classList.add('dark-mode');
        themeButton.textContent = '☀️';
        logoImage.src = 'images/byui-logo-white.png';
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference or default to light mode
window.addEventListener('load', () => {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        pageContent.classList.add('dark-mode');
        themeButton.textContent = '☀️';
        logoImage.src = 'images/byui-logo-white.png';
    }
});
