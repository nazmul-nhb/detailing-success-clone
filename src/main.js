import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { initDropdown } from './scripts/drop-down';
import { loadSliderImages } from './scripts/slider-contents';
import { initSlider } from './scripts/slider';
import { loadGridLinks } from './scripts/grid-links';
import { loadExperienceLinks } from './scripts/experience-links';
import { animateTextOnScroll } from './scripts/animate-divider';

// document.querySelector('#mobile-menu-button').addEventListener('click', () => {
//     const mobileMenu = document.querySelector('#mobile-menu');
//     mobileMenu.classList.toggle('hidden');
// });

// Array of IDs to animate on scroll for divider
const animatedDividerIDs = ["#landing-page-divider",]

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();

    animatedDividerIDs.map(id => animateTextOnScroll(id));

    loadSliderImages();
    initSlider();
    loadExperienceLinks();
    loadGridLinks();
});

