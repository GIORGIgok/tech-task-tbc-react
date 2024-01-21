"use strict";

// making header transparent on scroll
const fixedHeader = document.querySelector("header");

function handleScroll() {
    if (window.scrollY > 1) {
        fixedHeader.classList.add("transparent");
    } else {
        fixedHeader.classList.remove("transparent");
    }
}

window.addEventListener("scroll", handleScroll);

// ---------------------------------------------------- \\

// hiding header on scroll when the window is smaller than 768px
let prevScrollPos = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let currentScrollPos = window.scrollY;

    if (window.innerWidth <= 768) {
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
            burgerMenu.style.top = "30px";
        } else {
            header.style.top = "-84px";
            burgerMenu.style.top = "-84px";
        }

        if (currentScrollPos >= 84) {
            header.style.top = "0";
        }
        
    } else {
        header.style.top = "0";
        burgerMenu.style.top = "30px";
    }

    // updating scroll position
    prevScrollPos = currentScrollPos;
});

// ---------------------------------------------------- \\

// responsive burger menu
const burgerMenu = document.querySelector(".burger-menu");
let menuVisible = false;

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("clicked");

    // dark overlay
    const darkOverlay = document.querySelector(".dark-overlay");
    darkOverlay.style.display = "block";

    // updating menuVisible
    menuVisible = !menuVisible;

    const menuContent = document.querySelector(".menu-content");

    // conditionally updating menu position & dark overlay
    menuContent.style.right = menuVisible ? "0px" : "-85%";
    darkOverlay.style.display = menuVisible ? "block" : "none";
});

// close menu on click dark overlay
const darkOverlay = document.querySelector(".dark-overlay");

darkOverlay.addEventListener("click", function () {
    burgerMenu.classList.remove("clicked");
    darkOverlay.style.display = "none";

    const menuContent = document.querySelector(".menu-content");
    menuContent.style.right = "-85%";

    // setting menuVisible to false when dark overlay is clicked
    menuVisible = false;
});
