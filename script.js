"use strict";

// Hamburger menu
function hamburgerMenu() {
    let toggleBtn = document.querySelector(".toggle-button");
    let navLinks = document.querySelector(".nav-links");
    let logoContainer = document.querySelector(".logo-container");

    // Event listener
    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        logoContainer.classList.toggle("active");
    });
}

// Header template
let header = document.querySelector(".header");

// Create function to generate header and invoke header, footer and hamburger menu
function generateHeaderFooter() {
    header.innerHTML = `
    <div class="container">
    <div class="logo-container">
       <a href="index.html"> <img id="logo" src="./images//logo.png"></a>
    </div>
    <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <ul class="nav-links">
        <li><a href="index.html">Start</a></li>
        <li><a href="recipe_day.html">Rezept des Tages</a></li>
        <li><a href="./Kontaktformular.html">Kontakt</a></li>
        <li><a href="Impressum.html">Impressum</a></li>
    </ul>
</div>
    `;

    // Invoke hamburger menu function
    hamburgerMenu();
    generateFooter();
};


// Footer template
let footer = document.querySelector(".footer");

// Create function to generate footer 
function generateFooter() {
    footer.innerHTML = `
<div class="container">
<div class="footer-left">
    <img src="./images/logo.png">
    <ul class="social-links">
        <li><a href="https://twitter.com/?lang=de"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://de-de.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a></li>
    </ul>
</div>
<div class="footer-right">
    <ul class="right-links">
        <li><a href="Datenschutz.html">Datenschutz</a></li>
        <li><a href="./Kontaktformular.html">Kontakt</a></li>
        <li><a href="Impressum.html">Impressum</a></li>
    </ul>
</div>
</div>
`;
};


// Recipe portion calculation
// Calculation for jasmin recipe (Salad)
let portionSaladBtn = document.querySelector(".portion-btn-salad");

portionSaladBtn.addEventListener("click", () => {
    calculateSalad();
})

function calculateSalad() {
    let salad_ing1 = 1;
    let salad_ing2 = 800;
    let salad_ing3 = 100;
    let salad_ing4 = 3;
    let salad_ing5 = 1;
    let salad_ing6 = 140;

    let portionInputField = +document.querySelector('.portion-input').value;
    if (portionInputField < 1) {
        portionInputField = 1;
    }

    document.querySelector('.ing1_quantity').innerHTML = `${salad_ing1 * portionInputField}`;
    document.querySelector('.ing2_quantity').innerHTML = `${salad_ing2 * portionInputField}`;
    document.querySelector('.ing3_quantity').innerHTML = `${salad_ing3 * portionInputField}`;
    document.querySelector('.ing4_quantity').innerHTML = `${salad_ing4 * portionInputField}`;
    document.querySelector('.ing5_quantity').innerHTML = `${salad_ing5 * portionInputField}`;
    document.querySelector('.ing6_quantity').innerHTML = `${salad_ing6 * portionInputField}`;
}

// Calculation for raphael recipe (Pizza)
// No event listener because there is already one on this button . And also no button thats why i put an on click funtion directly on the button
function calculatePizza() {
    let pizza_ing1 = 500;
    let pizza_ing2 = 400;
    let pizza_ing3 = 300;
    let pizza_ing4 = 300;
    let pizza_ing5 = 1;
    let pizza_ing6 = 1;

    let portionInputField = +document.querySelector('.portion-input').value;
    if (portionInputField < 1) {
        portionInputField = 1;
    }

    document.querySelector('.ing1_quantity').innerHTML = `${pizza_ing1 * portionInputField}`;
    document.querySelector('.ing2_quantity').innerHTML = `${pizza_ing2 * portionInputField}`;
    document.querySelector('.ing3_quantity').innerHTML = `${pizza_ing3 * portionInputField}`;
    document.querySelector('.ing4_quantity').innerHTML = `${pizza_ing4 * portionInputField}`;
    document.querySelector('.ing5_quantity').innerHTML = `${pizza_ing5 * portionInputField}`;
    document.querySelector('.ing6_quantity').innerHTML = `${pizza_ing6 * portionInputField}`;
}

// Calculation for abass recipe (Pancake)
// No event listener because there is already one on this button . And also no button thats why i put an on click funtion directly on the button
function calculatePancake() {
    let pancake_ing1 = 500;
    let pancake_ing2 = 400;
    let pancake_ing3 = 2;
    let pancake_ing4 = 1;
    let pancake_ing5 = 3;
    let pancake_ing6 = 10;
    let pancake_ing7 = 1;

    let portionInputField = +document.querySelector('.portion-input').value;
    if (portionInputField < 1) {
        portionInputField = 1;
    }

    document.querySelector('.ing1_quantity').innerHTML = `${pancake_ing1 * portionInputField}`;
    document.querySelector('.ing2_quantity').innerHTML = `${pancake_ing2 * portionInputField}`;
    document.querySelector('.ing3_quantity').innerHTML = `${pancake_ing3 * portionInputField}`;
    document.querySelector('.ing4_quantity').innerHTML = `${pancake_ing4 * portionInputField}`;
    document.querySelector('.ing5_quantity').innerHTML = `${pancake_ing5 * portionInputField}`;
    document.querySelector('.ing6_quantity').innerHTML = `${pancake_ing6 * portionInputField}`;
    document.querySelector('.ing7_quantity').innerHTML = `${pancake_ing7 * portionInputField}`;
}

// Calculation for recipe of the day (Lasagna)
// No event listener because there is already one on this button . And also no button thats why i put an on click funtion directly on the button
function calculateLasagna() {
    let lasagna_ing1 = 500;
    let lasagna_ing2 = 400;
    let lasagna_ing3 = 300;
    let lasagna_ing4 = 300;
    let lasagna_ing5 = 1;
    let lasagna_ing6 = 1;

    let portionInputField = +document.querySelector('.portion-input').value;
    if (portionInputField < 1) {
        portionInputField = 1;
    }

    document.querySelector('.ing1_quantity').innerHTML = `${lasagna_ing1 * portionInputField}`;
    document.querySelector('.ing2_quantity').innerHTML = `${lasagna_ing2 * portionInputField}`;
    document.querySelector('.ing3_quantity').innerHTML = `${lasagna_ing3 * portionInputField}`;
    document.querySelector('.ing4_quantity').innerHTML = `${lasagna_ing4 * portionInputField}`;
    document.querySelector('.ing5_quantity').innerHTML = `${lasagna_ing5 * portionInputField}`;
    document.querySelector('.ing6_quantity').innerHTML = `${lasagna_ing6 * portionInputField}`;
}
