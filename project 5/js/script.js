function update(current, location) {
	celcius.innerText = `${current.temp_c} C`;
	fehranhite.innerText = `${current.temp_f} F`;

	city.innerText = location.name;
	country.innerText = location.country;

	feelLike.innerText = `${current.feelslike_c} C`;
	humidity.innerText = `${current.humidity} %`;

	lastUpdate.innerText = current.last_updated.split(" ")[1];
	currentDate.innerText = location.localtime.split(" ")[1];

	windDirection.innerText = current.wind_dir;

	if (celcius.innerText > "38") {
		addhotClass([body, input]);
	} else {
		adddayClass([body, input]);
	}

	if (currentDate.innerText.split(":")[0] > "18") {
		addnightClass([body, input]);
	}
}

btn.addEventListener("click", () => {
    dataFunc();
});

const dataFunc = async () => {
    let city = input.value.toLowerCase();
	if (city) {
		const config = {
			method: "GET",
			headers: {
				"Transfer-Encoding": "chunked",
				Connection: "keep-alive",
				Vary: "Accept-Encoding",
				"CDN-PullZone": "93447",
				"CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
				"CDN-RequestCountryCode": "FI",
				"CDN-EdgeStorageId": "615",
				"Request-Context": "appId=cid-v1:89996683-9a04-40b3-8e46-77754119dcf5",
				"CDN-CachedAt": "2021-06-10 21:13:42",
				"CDN-RequestPullSuccess": "True",
				"CDN-RequestPullCode": "200",
				"CDN-RequestId": "9e4bdf7213ed3a84ba731a5d53d58a6b",
				"CDN-Cache": "MISS",
				"Cache-Control": "public, max-age=180",
				"Content-Type": "application/json",
				Server: "BunnyCDN-FI1-615",
			},
		};

		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=92fc14d1c7824494a33191055211006&q=${city}&aqi=yes`, config)
			
            const data = await response.json();
            let { current, location } = data;
            update(current, location);
	} else {
		document.querySelector(".error").innerText = "Please Insert a City Name";
		setTimeout(() => {
			document.querySelector(".error").innerText = "";
		}, 2000);
	}
};
