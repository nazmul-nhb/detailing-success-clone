import './style.css';


document.querySelector('#mobile-menu-button').addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
