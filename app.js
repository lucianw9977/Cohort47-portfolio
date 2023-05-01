// Hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function() {
        this.classList.toggle("open");
        menu.classList.toggle("open");
    });
});

















