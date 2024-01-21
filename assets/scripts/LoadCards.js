"use strict"

const cardData = [
    {
        title: "iOS Development",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/ios.jpg",
    },
    {
        title: "React",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/react.jpg",
    },
    {
        title: "Intro to Python",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/python.jpg",
    },
    {
        title: "Advanced Python",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/advpython.jpg",
    },
    {
        title: "Advanced Cyber Security Course",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/advcybersecurity.jpg",
    },
    {
        title: "Tot - Training of Trainers",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/tot.jpg",
    },
    {
        title: "Blockchain",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/blockchain.jpg",
    },
    {
        title: "DevOps",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/devops.jpg",
    },
    {
        title: "Information Security Governance",
        status: "რეგისტრაცია დასრულებულია",
        image: "./assets/imgs/cards/infosecurity.jpg",
    }, 
];

function createCards() {
    const cardContainer = document.getElementById("cards-parent");

    cardData.forEach((data) => {
        const card = document.createElement("article");
        card.classList.add("courses-card");

        const image = document.createElement("img");
        image.src = data.image;

        card.innerHTML += ` 
        <figure>
        <img
            src="${data.image}"
            alt="${data.title}"
        />
        </figure>
        <div class="card-dets">
            <span class="card-description"
                >${data.title}</span>
            <span class="card-status"
                >${data.status}
                </span>
        </div>
        <div class="card-btn-parent">
            <figure>
                <img
                    src="./assets/svg/blue-arrow.svg"
                    alt="arrow"
                />
            </figure>
        <a id="card-btn-txt" href="#">კურსის დეტალები</a>
        </div>
        `;

        cardContainer.appendChild(card);
    });
}

createCards();
