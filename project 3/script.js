const close = document.getElementById("close");
const open = document.getElementById("open");

const container = document.querySelector(".container");
const circle = document.querySelector(".circle");


open.addEventListener("click", () => {
    container.classList.toggle("rotate");
    circle.classList.toggle("open");
})
close.addEventListener("click", () => {
    container.classList.toggle("rotate");
    circle.classList.toggle("open");
})