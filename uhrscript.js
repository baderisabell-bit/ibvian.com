/* =========================================================
   AURELIUS & SÖHNE
   JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navLinks = mainNav.querySelectorAll("a");


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const handleScroll = () => {

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Menü schließen" : "Menü öffnen"
        );

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".reveal, .section-heading, .history-copy, .craft-item, .collection-card, .process-item, .visit-content"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        if (!element.classList.contains("reveal")) {
            element.classList.add("reveal");
        }

        observer.observe(element);

    });


    /* =====================================================
       SMOOTH ANCHOR OFFSET
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerOffset = 80;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const button = contactForm.querySelector("button");

            const originalText = button.innerHTML;

            button.innerHTML = "Vielen Dank <span>✓</span>";

            button.disabled = true;

            setTimeout(() => {

                button.innerHTML = originalText;
                button.disabled = false;

                contactForm.reset();

            }, 3500);

        });

    }


    /* =====================================================
       SUBTLE PARALLAX HERO
    ===================================================== */

    const hero = document.querySelector(".hero");

    if (hero && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {

        window.addEventListener("scroll", () => {

            const scroll = window.scrollY;

            if (scroll < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center ${scroll * 0.15}px`;

            }

        }, {
            passive: true
        });

    }

});