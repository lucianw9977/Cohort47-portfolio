// Hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function() {
        this.classList.toggle("open");
        menu.classList.toggle("open");
    });
});

// Scroll-to-top button:
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

  // Show scroll-to-top button when user scrolls down
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

  // Scroll to top when user clicks on scroll-to-top button
    scrollToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});






// wait for page load
window.addEventListener('load', () => {
  // simulate a delay of 5 seconds before hiding the loader
  setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    const body = document.querySelector('body');
    loader.classList.add('loaded');
    body.style.overflow = 'visible';
  }, 5000);
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// scroll to top button
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});




// preloader
window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 6000);
});
















