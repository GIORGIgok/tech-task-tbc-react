# TBC x USAID - Tech. Task(React)

Project Structure:
-----------------
- index.html
- **assets/**
  - scripts/ (Vanilla JavaScript)
    - HeaderFeatures.js
    - LoadCards.js
    - PartnersCarousel.js
    - TbcAccordion.js
  - **styles/**
    - styles.css (main external styles)
  - **imgs/**
    - (Image files)
  - **svgs/**
    - (SVG files)

Explanation:
-------------
1. **index.html:** The main page of project.

2. **assets/:** This folder contains sub-folders for organizing various types of assets:

      1. **scripts/:**
- `HeaderFeatures.js` - includes functionality to make the header transparent on scroll, hide the header when scrolling on smaller screens, and implement a responsive burger menu with a dark overlay.
- `LoadCards.js` - Dynamically generates HTML elements for each course, taking the data from the array. The created cards are then appended to the "cards-parent" element in the HTML. The resulting output is a set of course cards with images, titles, status and a link for more details.
- `PartnersCarousel.js` - The partnersData array holds information about partner logos, including their src and name. The createCarousel function sets up event listeners for left and right buttons, allowing manual navigation through the slides. Additionally, it automatically transitions to the next set of slides after a specified time interval. The carousel displays three partner logos at a time, and the transition effect is achieved by adjusting the opacity of the figures.
- `TbcAccordion.js` - Creates an accordion-style interface for displaying frequently asked questions (FAQs). The accordionData array contains information about each question, including the question itself, the first answer, and additional details in an unordered list. The createAccordion function dynamically generates HTML elements for each FAQ, and clicking on a question toggles the visibility of its answer.

  2. **styles/:**
- `style.css` - Contains the project's styles, ensuring a responsive design that adapts well to various screen sizes, including tablets and mobile devices.

  3. **svgs/:** Stores SVG files that are used in project.

  4. **imgs/:** Reserved for image files related to your project.

Project follows the instructions, using only HTML, CSS, and Vanilla JavaScript. No JavaScript libraries were used to ensure simplicity and to follow the provided guidelines.


## How to Run

Follow these steps to run the project locally:

#### Clone the Repository
    git clone https://github.com/GIORGIgok/tbc-tech-task.git

#### Navigate to the Project Directory
    cd TBC Tech Task Project

#### Open the Project
for Windows:
- `start index.html`

for Linux
- `xdg-open index.html`

for macOS
- `open index.html`

Now you are ready to explore and interact with the project in your web browser.