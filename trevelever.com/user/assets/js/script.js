'use strict';

// About us
document.getElementById("about-us-1").addEventListener("click", function () {
    window.scroll({ top: 2660, left: 0, behavior: 'smooth' });
});
document.getElementById("about-us-2").addEventListener("click", function () {
    window.scroll({ top: 2660, left: 0, behavior: 'smooth' });
});

// About us
document.getElementById("footer-about-us").addEventListener("click", function () {
    window.scroll({ top: 2660, left: 0, behavior: 'smooth' });
});

/* navbar toggle */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
});


/* show go top btn when scroll window to 500px */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active")
      : goTopBtn.classList.remove("active");
});