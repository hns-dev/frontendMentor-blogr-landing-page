// Nav controls
const navBtn = document.querySelector('#nav-btn');
const mainMenu = document.querySelector('#main-menu-container');
const hamburger = document.querySelector('#hamburger-icon');
const close = document.querySelector('#menu-close-icon');

const navLinks = document.querySelectorAll('.navlink');
const subMenus = document.querySelectorAll('.sub-menu');



navBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    hamburger.classList.toggle('show');
    close.classList.toggle('show');
})

navLinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        if (navlink.getAttribute('aria-expanded') == 'true') {
            navlink.setAttribute('aria-expanded', 'false');
            closeAllSubMenes();
        } else {
            navlink.setAttribute('aria-expanded', 'true');
            console.log(document.querySelector(`#${navlink.getAttribute('id')}-submenu`))
            openSubMene(document.querySelector(`#${navlink.getAttribute('id')}-submenu`));
        }
    })
})

function closeAllSubMenes() {
    subMenus.forEach(submenu => {
        submenu.style.display = 'none';
    })
}

function openSubMene(submenu) {
    submenu.style.display = 'block';
}
