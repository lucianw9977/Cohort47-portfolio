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
    function scrambleText(el, text, scrambleDuration) {
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
        setTimeout(() => {
            el.innerHTML = text;
        }, scrambleDuration);
    }

    function updateScramble(el, text, scrambleDuration, pauseDuration) {
        const scramble = () => {
            scrambleText(el, text, scrambleDuration);
        };

        setInterval(scramble, scrambleDuration + pauseDuration);
        scramble();
    }

    document.addEventListener('DOMContentLoaded', function () {
        const scrambledName = document.getElementById('scrambled-name');
        updateScramble(scrambledName, 'lucian wang', 2000, 3000); // Set scrambleDuration to 2000 and pauseDuration to 3000
    });
})();







// Contact Form Submission Handling
// Initialize EmailJS
const ContactForm = (() => {
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");

        // Initialize EmailJS
        emailjs.init("w6i9t3I933T9G0qMs");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            // Collect form data
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            // Prepare email parameters
            const emailParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: "lucianw9797@gmail.com",
            };

            // Send email
            emailjs.send("default_service", "template_fz9r4s8", emailParams)
                .then(() => {
                    alert("Your message has been submitted successfully!");
                })
                .catch((error) => {
                    console.error("Error sending email:", error);
                    alert("An error occurred while sending your message. Please try again later.");
                });
        });
    });
})();







