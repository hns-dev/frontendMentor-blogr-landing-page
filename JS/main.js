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
    
    navlink.addEventListener('click', () => {
        
        if (!navlink.classList.contains('expanded')) {
            UndowRotateArrows()
            closeAllSubmenu();
        }

        rotateArrow(navlink);
        openSubmenu(document.querySelector(`#${navlink.getAttribute('id')}-submenu`));
    })

})


function rotateArrow(link) {
    link.classList.toggle('expanded')
}

function openSubmenu(submenu) {
    submenu.classList.toggle('expanded')
}

function closeAllSubmenu() {
    subMenus.forEach(submenu => {
        submenu.classList.remove('expanded');
    })
}

function UndowRotateArrows() {
    navLinks.forEach(navlink => {
        navlink.classList.remove('expanded');
    })
}

