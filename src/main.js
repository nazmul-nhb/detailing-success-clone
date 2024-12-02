import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// document.querySelector('#mobile-menu-button').addEventListener('click', () => {
//     const mobileMenu = document.querySelector('#mobile-menu');
//     mobileMenu.classList.toggle('hidden');
// });

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const content = dropdown.querySelector('.dropdown-content');

        if (isMobile) {
            // Mobile functionality
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('active');

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) other.classList.remove('active');
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });
        } else {
            // Desktop functionality
            let timeout;

            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                dropdowns.forEach(other => other.classList.remove('active'));
                dropdown.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    dropdown.classList.remove('active');
                }, 200); // 200ms delay before hiding
            });

            content.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
            });

            content.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    dropdown.classList.remove('active');
                }, 200); // 200ms delay before hiding
            });
        }
    });

    // Close dropdowns on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});

