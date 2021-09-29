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

	if (currentTemp_c > "38") {
		addhotClass([body, input]);
	} else {
		adddayClass([body, input]);
	}

	if (currentDate.innerText > "18" && currentDate.innerText < "5") {
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
				  "Connection": "keep-alive",
				  "Vary": "Accept-Encoding",
				  "CDN-PullZone": "93447",
				  "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
				  "CDN-RequestCountryCode": "GB",
				  "CDN-EdgeStorageId": "786",
				  "CDN-CachedAt": "2021-09-29 11:22:41",
				  "CDN-RequestPullSuccess": "True",
				  "CDN-RequestPullCode": "200",
				  "CDN-RequestId": "1ee9f84700a8794fe11ae82d4d2cf658",
				  "CDN-Status": "200",
				  "CDN-Cache": "MISS",
				  "Cache-Control": "public, max-age=180",
				  "Content-Type": "application/json",
				  "Date": "Wed, 29 Sep 2021 11:22:41 GMT",
				  "Server": "BunnyCDN-UK1-786"
			},
		};

		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key= d7320fa14fc649db858111925212909=${city}&days=7&aqi=no&alerts=no`
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
