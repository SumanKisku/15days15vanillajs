const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

const toggle = () => {
    navbar.classList.toggle("hidden");
}
hamburger.addEventListener('click', toggle);
