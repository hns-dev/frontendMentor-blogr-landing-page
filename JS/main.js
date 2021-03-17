// Nav controls
const navBtn = document.querySelector('#nav-btn');
const mainMenu = document.querySelector('#main-menu-container');
const hamburger = document.querySelector('#hamburger-icon');
const close = document.querySelector('#menu-close-icon');

const navLinks = document.querySelectorAll('.navlink');
const subMenus = document.querySelectorAll('.sub-menu');


// Toggle menu buttons
navBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    hamburger.classList.toggle('show');
    close.classList.toggle('show');
})


// Toggle sub menu & Icon
navLinks.forEach(navlink => {
    
    navlink.addEventListener('mouseenter', () => {
        navlink.setAttribute('aria-expanded', 'true');
        openSubMene(document.querySelector(`#${navlink.getAttribute('id')}-submenu`));
    })

    navlink.addEventListener('mouseleave', () => {
        navlink.setAttribute('aria-expanded', 'false');
        closeSubMene(document.querySelector(`#${navlink.getAttribute('id')}-submenu`));
    })

})

function openSubMene(submenu) {
    submenu.style.display = 'block';
}

function closeSubMene(submenu) {
    submenu.style.display = 'none';
}
