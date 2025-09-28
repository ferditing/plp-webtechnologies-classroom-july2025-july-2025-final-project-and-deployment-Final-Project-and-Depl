import { toggleClass, smoothScroll } from "./utils.js";


document.addEventListener("DOMContentLoaded", () => {
// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");


if (navToggle) {
navToggle.addEventListener("click", () => {
toggleClass(navMenu, "active");
});
}


// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
link.addEventListener("click", (e) => {
const href = link.getAttribute("href");
if (href.startsWith("#")) {
e.preventDefault();
smoothScroll(href.substring(1));
}
});
});


// Sidebar toggle
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

toggleBtn.addEventListener('click', function() {
sidebar.classList.toggle('open');
overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
});

overlay.addEventListener('click', function() {
sidebar.classList.remove('open');
overlay.style.display = 'none';
});


// Sidebar toggle for mobile
if (toggleBtn && sidebar) {
toggleBtn.addEventListener('click', () => {
sidebar.classList.toggle('open');
});
// Optional: close sidebar when clicking outside (mobile)
document.addEventListener('click', (e) => {
if (
sidebar.classList.contains('open') &&
!sidebar.contains(e.target) &&
e.target !== toggleBtn
) {
sidebar.classList.remove('open');
}
});
}


// Simple form validation for Contact page
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
contactForm.addEventListener("submit", (e) => {
const name = contactForm.querySelector("[name='name']").value.trim();
const email = contactForm.querySelector("[name='email']").value.trim();
const message = contactForm.querySelector("[name='message']").value.trim();


if (!name || !email || !message) {
e.preventDefault();
alert("Please fill in all fields before submitting.");
} else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
e.preventDefault();
alert("Please enter a valid email address.");
}
});
}
});