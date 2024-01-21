"use strict"

const partnersData = [
    { src: "./assets/imgs/Partners/usaid.png", name: "usaid" },
    { src: "./assets/imgs/Partners/spaceint.png", name: "spaceint" },
    { src: "./assets/imgs/Partners/tineti.png", name: "tineti" },
    { src: "./assets/imgs/Partners/tegeta.png", name: "tegeta" },
    { src: "./assets/imgs/Partners/spectre.png", name: "spectre" },
    { src: "./assets/imgs/Partners/tbcleasing.png", name: "tbcleasing" },
    { src: "./assets/imgs/Partners/ufc.png", name: "ufc" },
];

function createCarousel() {
    const slideDiv = document.querySelector(".slide");
    const totalSlides = partnersData.length;
    const slidesPerPage = 3;
    let currentIndex = 0;

    // initial display of the first 3 images
    displaySlides();

    // event listener for right button
    document.querySelector(".right").addEventListener("click", function () {
        if (currentIndex < totalSlides - slidesPerPage) {
            currentIndex += slidesPerPage;
        } else {
            currentIndex = 0;
        }
        displaySlides();
    });

    // event listener for left button
    document.querySelector(".left").addEventListener("click", function () {
        let newIndex = currentIndex - slidesPerPage;

        if (newIndex < 0) {
            newIndex = totalSlides - slidesPerPage;
        }
        currentIndex = newIndex;
        displaySlides();
    });

    // automatically update slides after a specific time interval
    setInterval(function () {
        if (currentIndex < totalSlides - slidesPerPage) {
            currentIndex += slidesPerPage;
        } else {
            currentIndex = 0;
        }
        displaySlides();
    }, 8000);

    function displaySlides() {
        let slidesHTML = "";
        for (let i = currentIndex; i < currentIndex + slidesPerPage; i++) {
            const partner = partnersData[i % totalSlides];
            slidesHTML += `<figure><img src="${partner.src}" alt="${partner.name}"></figure>`;
        }
        slideDiv.innerHTML = slidesHTML;

        setTimeout(function () {
            const figures = slideDiv.querySelectorAll("figure");
            figures.forEach((figure, _index) => {
                figure.style.opacity = 1;
            });
        }, 10);
    }
}

createCarousel();
