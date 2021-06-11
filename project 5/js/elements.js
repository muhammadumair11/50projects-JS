const body = document.body;

const input = document.getElementById("input");
const btn = document.getElementById("btn");

const celcius = document.querySelector(".cel h1");
const fehranhite = document.querySelector(".feh h1");

const city = document.querySelector(".location h3");
const country = document.querySelector(".location h6");

const feelLike = document.querySelector(".feels .bold");
const humidity = document.querySelector(".humid .bold");
const lastUpdate = document.querySelector(".last-update .bold");
const currentDate = document.querySelector(".current-date");

const windDirection = document.querySelector(".wind-direction .bold");



adddayClass([input, body],'');

function addhotClass([...arr] = [], element = "") {
	btn.classList.remove("blue");
	btn.classList.add("red");
	if (element != "") {
		element.className("");
		element.classList.add("hot");
	}
	if (arr != []) {
		arr.forEach((el) => {
			el.className = "";
			el.classList.add("hot");
		});
	}
}
function adddayClass([...arr] = [], element = "") {
	btn.classList.remove("red");
	btn.classList.add("blue");
	if (element != "") {
		element.className("");
		element.classList.add("day");
	}
	if (arr != []) {
		arr.forEach((el) => {
			el.className = "";
			el.classList.add("day");
		});
	}
}
function addnightClass([...arr] = [], element = "") {
	btn.classList.remove("red");
	btn.classList.add("blue");
	if (element != "") {
		element.className("");
		element.classList.add("night");
	}
	if (arr != []) {
		arr.forEach((el) => {
			el.className = "";
			el.classList.add("night");
		});
	}
}
