/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* Defining Global Variables: */

// 1- Sections:
const sections = Array.from(document.getElementsByTagName("section"));
// 2- Navigation bar:
let nav = document.querySelector(`nav`);
let navUl = document.querySelector(`ul`);
// 3- Scroll to top button:
let scrlUp = document.createElement(`button`);



/* Navigation bar list elements: */

// For loop:
for (let i = 0; i < sections.length; i++) {
    // 1- Difining:
    const navLi = document.createElement('li');
    // 2- DOM:
    navUl.appendChild(navLi);
    // 3- Text content:
    navLi.textContent = `Section ${i + 1}`;
    // 4- Functions:
    // (A) Styling functions:
    function hoverSty() {
        navLi.classList.add(`li-style`)
    };
    function unHoverSty() {
        navLi.classList.remove(`li-style`)
    };
    // (B) Functions for Performance:
    function funClick() {
        scrollTo({top: sections[i].offsetTop, left: 0, behavior: `smooth`});
    };
    // 5- The events:
    // (A) Styling events:
    navLi.addEventListener(`mouseover`, hoverSty);
    navLi.onmouseleave = unHoverSty;
    // (B) Events for Performance:
    navLi.addEventListener(`click`, funClick);
    // 6- Making sections and navbar elements active
    window.addEventListener(`scroll`, function () {

        let scrollMeter = window.pageYOffset;

        if (
        scrollMeter >= sections[i].offsetTop && 
        scrollMeter < sections[i].offsetTop + sections[i].offsetHeight) {

        sections[i].classList.add(`your-active-class`);
        hoverSty();
        } else {
            sections[i].classList.remove(`your-active-class`);
            unHoverSty();
        };
    });
};



/*-----(Additional features)-----*/

// Function: (A) scroll to the top (a function for the nav label and the scroll to top button):
function scrlTop() {
    window.scrollTo({top: 0, left: 0, behavior: `smooth`});
};

// 1- Navigation bar label:
/* If you clicked on it, The window will be scrolled to the top. */

// (Defining):
let navLab = document.querySelector(`label`);
// (Style functions):
function selNavLab() {
    navLab.style.color = `#7db1b1`;
};
function unSelNavLab() {
    navLab.style.color = `#eee`;
};
// (The events)
navLab.onmouseover = selNavLab;
navLab.addEventListener(`mouseleave`, unSelNavLab);
navLab.addEventListener(`click`, scrlTop);

// 2- Scroll to top button:
/* A button if you clicked on it, The window will be scrolled to the top. */

// (Defining):
document.body.appendChild(scrlUp);
// (Text content):
scrlUp.textContent = `UP`;
// (Display functions):
function disButton() {
    scrlUp.style.display = `block`
};
function unDisButton() {
    scrlUp.style.display = `none`
};
function pageScroll() {
    if (window.pageYOffset >= 412.5) {
        disButton()
    } else {
        unDisButton()
    };
};
// (Styling functions):
function scrlSty() {
    scrlUp.style.color = `#6a50a7`;
};
function unscrlSty() {
    scrlUp.style.color = `#3c3b3d`;
};
// (The events):
window.onscroll = pageScroll;
scrlUp.addEventListener(`click`, scrlTop);
scrlUp.onmouseover = scrlSty;
scrlUp.addEventListener(`mouseleave`, unscrlSty);

// The end!
// Coded by: Omar Mahmoud Ahmed.
// Best wishes!


