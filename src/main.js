import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { initDropdown } from './scripts/drop-down';
import { initSlider } from './scripts/slider';

// document.querySelector('#mobile-menu-button').addEventListener('click', () => {
//     const mobileMenu = document.querySelector('#mobile-menu');
//     mobileMenu.classList.toggle('hidden');
// });

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();

    initSlider();
});

