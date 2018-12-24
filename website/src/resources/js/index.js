

const hamburgerMenu     = document.getElementById( "navbar-menu-btn" );
const mobileMenu        = document.getElementById( "mobile-menu" );
const closeMobileMenu   = document.getElementById( "close-mobile-menu-btn" );



hamburgerMenu.addEventListener( "click", () => {
    mobileMenu.style.display = "block";
});


closeMobileMenu.addEventListener( "click", () => {
    mobileMenu.style.display = "none";
});