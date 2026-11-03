/* =========================================================
   FUNNGRO WEBSITE REVAMP
   Final JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");


/* =========================
   OPEN / CLOSE MOBILE MENU
   ========================= */

function closeMobileMenu() {

    if (!navbar || !menuToggle) {
        return;
    }

    navbar.classList.remove("mobile-menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


function openMobileMenu() {

    if (!navbar || !menuToggle) {
        return;
    }

    navbar.classList.add("mobile-menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

}


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            navbar.classList.contains("mobile-menu-open");

        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    });

}


/* =========================================================
   MOBILE MENU LINKS
   ========================================================= */

const mobileLinks = document.querySelectorAll(
    ".nav-links a, .nav-buttons a"
);

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        closeMobileMenu();

    });

});


/* =========================================================
   CLOSE MENU WITH ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!navbar || !menuToggle) {
            return;
        }

        const menuIsOpen =
            navbar.classList.contains(
                "mobile-menu-open"
            );

        if (!menuIsOpen) {
            return;
        }

        const clickedInsideNavbar =
            navbar.contains(event.target);

        if (!clickedInsideNavbar) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
   ========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 760) {
            closeMobileMenu();
        }

    },
    {
        passive: true
    }
);


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".step-card, " +
    ".category-card, " +
    ".benefit-card, " +
    ".stat-item, " +
    ".earning-card, " +
    ".trust-card, " +
    ".cta-section"
);


/* =========================
   INTERSECTION OBSERVER
   ========================= */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );

} else {

    /*
       Fallback for older browsers.
    */

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const header =
    document.querySelector(".site-header");


function updateNavbarOnScroll() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavbarOnScroll,
    {
        passive: true
    }
);


/* =========================================================
   INITIAL NAVBAR STATE
   ========================================================= */

updateNavbarOnScroll();


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Funngro Website Revamp. All rights reserved.`;

}


/* =========================================================
   PREVENT DOUBLE ACTIVATION
   ========================================================= */

if (navLinks) {

    navLinks.setAttribute(
        "aria-label",
        "Main navigation"
    );

}

if (navButtons) {

    navButtons.setAttribute(
        "aria-label",
        "Primary actions"
    );

}


/* =========================================================
   PAGE LOADED
   ========================================================= */

console.log(
    "Funngro Website Revamp loaded successfully."
);