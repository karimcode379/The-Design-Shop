let mobileMenu = document.getElementById('mobileMenu');
let header = document.getElementById('header');

function toggleMenu() {
    if (mobileMenu.style.height === "100%") {
        mobileMenu.style.transition = "height 0ms 0ms, opacity 600ms 0ms";
        mobileMenu.style.height = "0";
        mobileMenu.style.opacity = "0";
        mobileMenu.style.margin = "0"
        header.style.padding = "8vh 0";
    } else {
        mobileMenu.style.height = "100%";
        mobileMenu.style.transition = "height 0ms 800ms, opacity 800ms 0ms";
        mobileMenu.style.opacity = "1";
        mobileMenu.style.margin = "0 0 5vh 0"
        header.style.padding = "8vh 0 0 0";
    }
}