// Target the menu button and navigation
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the 'hide' class on the nav
    nav.classList.toggle('hide');
    // Toggle the 'change' class on the menu button
    menuBtn.classList.toggle('change');
});
