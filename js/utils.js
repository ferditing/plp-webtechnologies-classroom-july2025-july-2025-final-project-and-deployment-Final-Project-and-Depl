// Utility functions for interactivity


function toggleClass(element, className) {
if (element.classList.contains(className)) {
element.classList.remove(className);
} else {
element.classList.add(className);
}
}


function smoothScroll(targetId) {
const target = document.getElementById(targetId);
if (target) {
window.scrollTo({
top: target.offsetTop,
behavior: "smooth",
});
}
}


export { toggleClass, smoothScroll };