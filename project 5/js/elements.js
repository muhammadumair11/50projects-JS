const body = document.body;
//Search
const input = document.getElementById("input");
const btn = document.getElementById("btn");

//Temperature
const celcius = document.querySelector(".cel h1");
const fehranhite = document.querySelector(".feh h1");
//img
	const tempImg = document.querySelectorAll(".display-info .temp .img");


//Locatoin

const status = document.querySelector(".location h1");
const city = document.querySelector(".location h3");
const country = document.querySelector(".location h6");

//Extra info

const feelLike = document.querySelector(".feels .bold");
const humidity = document.querySelector(".humid .bold");
const lastUpdate = document.querySelector(".last-update .bold");
const currentDate = document.querySelector(".current-date");
const windDirection = document.querySelector(".wind-direction .bold");

//more info

const maxTemp = document.querySelector(".max .bold");
const minTemp = document.querySelector(".min .bold");

//Hours

const hourImg = document.querySelectorAll(".hour .temp .img");
const hourTemp = document.querySelectorAll(".hour .temp h1");
const hourCondition = document.querySelectorAll(".hour .condition");
const hourTime = document.querySelectorAll(".hour .time");




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
