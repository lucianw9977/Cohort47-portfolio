// HamburgerMenu
const HamburgerMenu = (() => {
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger-menu");
        const menu = document.querySelector(".menu");

        hamburger.addEventListener("click", function() {
            this.classList.toggle("open");
            menu.classList.toggle("open");
        });
    });
})();

// ScrollToTop
const ScrollToTop = (() => {
    document.addEventListener("DOMContentLoaded", function() {
        const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        scrollToTopBtn.addEventListener("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });
})();

// Preloader
const Preloader = (() => {
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hide');
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 4000);
    });
})();

// ScrambleTextEffect
const ScrambleTextEffect = (() => {
    function scrambleText(el, text) {
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        let scrambledText = '';

        for (let i = 0; i < text.length; i++) {
            if (Math.random() < 0.5) {
                scrambledText += text[i];
            } else {
                scrambledText += chars[Math.floor(Math.random() * chars.length)];
            }
        }

        el.innerHTML = scrambledText;
    }

    function updateScramble(el, text, scrambleDuration, pauseDuration) {
        let scrambleStartTime = Date.now();
        const scramble = () => {
            const elapsedTime = Date.now() - scrambleStartTime;

            if (elapsedTime < scrambleDuration) {
                scrambleText(el, text);
                requestAnimationFrame(scramble);
            } else {
                el.innerHTML = text;
                setTimeout(() => {
                    scrambleStartTime = Date.now();
                    scramble();
                }, pauseDuration);
            }
        };

        scramble();
    }

    document.addEventListener('DOMContentLoaded', function() {
        const scrambledName = document.getElementById('scrambled-name');
        updateScramble(scrambledName, 'lucian wang', 1000, 2500);
    });
})();
