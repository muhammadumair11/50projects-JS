const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progressbar");
const items = document.querySelectorAll(".item");
let count = 1;

next.addEventListener("click", () => {
    count += 1;
    if(count > items.length) {
        count = items.length;
    }
    update();
    console.log(count);
})
prev.addEventListener("click", () => {
    count -= 1;
    if(count < 1) {
        count = 1;
    }
    update();
    console.log(count);
});

const update = () => {
    items.forEach((item,i) => {
        if(i < count) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length - 1) / (items.length - 1)) * 100 + "%";

    if(count == 1) {
        prev.disabled = false;
    } else if (count == items.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}