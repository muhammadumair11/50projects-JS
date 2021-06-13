function update(current, location, forecast) {

	// Current Objects data destructuring 
	let {
		temp_c: currentTemp_c,
		temp_f: currentTemp_f,
		feelslike_c: currentfeelslike_c,
		humidity: currenthumidity,
		last_updated: currentlastupdated,
		wind_dir: currentdir,
	condition: {
			icon: currentIcon,
			text: currentcondition,
		}
	} = current;
	
	// Location Objects data destructuring 

	let {
		name,
		country,
		localtime
	} = location

	//ForeCast Object destructuring

	let { forecastday } = forecast;
	let {
		day : {maxtemp_c,mintemp_c,},
		hour,
	} = forecastday[0]

	for (let i = 0; i < hour.length; i++) {
		let {
			temp_c,
			condition: {text,icon},
			time,
		} = hour[i];
		
		hourImg[i].style.backgroundImage = `url(${icon})`;
		hourTemp[i].innerText = temp_c + " C";
		hourCondition[i].innerText = text;
		hourTime[i].innerText = time.split(" ")[1];
	}


	//Assigning data

	celcius.innerText = `${currentTemp_c} C`;
	fehranhite.innerText = `${currentTemp_f} F`;
	tempImg.forEach(img => {
		img.style.backgroundImage = `url(${currentIcon})`;
	});

	status.innerText = currentcondition;
	city.innerText = name;
	countryLocation.innerText = country;

	feelLike.innerText = `${currentfeelslike_c} C`;
	humidity.innerText = `${currenthumidity} %`;

	lastUpdate.innerText = currentlastupdated.split(" ")[1];
	currentDate.innerText = localtime.split(" ")[1];

	windDirection.innerText = currentdir;

	maxTemp.innerText = maxtemp_c + " C";
	minTemp.innerText = mintemp_c + " C";

	//Background color check 

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
			/*`https://api.weatherapi.com/v1/forcast.json?key=92fc14d1c7824494a33191055211006&q=${city}&aqi=yes`*/

			`https://api.weatherapi.com/v1/forecast.json?key= 92fc14d1c7824494a33191055211006&q=${city}&days=7&aqi=no&alerts=no`
			,
			config
		);

		const data = await response.json();
		
		let { current, location, forecast } = data;
		update(current,location,forecast);

	} else {
		document.querySelector(".error").innerText = "Please Insert a City Name";
		setTimeout(() => {
			document.querySelector(".error").innerText = "";
		}, 2000);
	}
};
