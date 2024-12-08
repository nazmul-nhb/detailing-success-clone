// @ts-check

import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { initDropdown } from './utilities/drop-down';
import { initSlider } from './utilities/slider';
import { loadGridLinks } from './modules/grid-links';
import { loadExperienceLinks } from './modules/experience-links';
import { animateTextOnScroll } from './utilities/animate-divider';
import { loadMagicNumbers } from './modules/magic-numbers';
import { loadGallery } from './utilities/gallery';
import { loadFooter } from './modules/footer';
import { loadSliderImages } from './modules/slider-contents';
import { landingPageImages } from './data/slider-images';

// document.querySelector('#mobile-menu-button').addEventListener('click', () => {
//     const mobileMenu = document.querySelector('#mobile-menu');
//     mobileMenu.classList.toggle('hidden');
// });

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    animateTextOnScroll("#landing-page-divider", 10);
    loadSliderImages('#slider-images-container', landingPageImages)
    initSlider('#landing-slider');
    loadExperienceLinks();
    loadGridLinks();
    loadMagicNumbers();
    loadGallery();
    loadFooter();
});

