const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokebtn");

dataJoke();
btn.addEventListener("click", dataJoke);

async function dataJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", config);
	const data = await res.json();
	jokeEl.innerText = data.joke;
	
}
