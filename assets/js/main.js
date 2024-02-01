/*===== MENU SHOW AND HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Remove 'active' class from all nav links
    navLink.forEach(n => n.classList.remove('active'));
    // Add 'active' class to the clicked nav link
    this.classList.add('active');

    // Remove menu mobile
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all section elements and nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    // Function to update the active nav link
    function updateActiveNavLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Initial call to set the active nav link when the page is first loaded
    updateActiveNavLink();
});
