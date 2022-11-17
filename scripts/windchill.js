const currentTemp = document.querySelector('#temp');
const cWind = document.querySelector('#wind');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#w-description');
const cloudSky = 'https://cdn-icons-png.flaticon.com/128/899/899718.png';
const sunSky = 'https://cdn-icons-png.flaticon.com/128/3222/3222672.png';
const rainSky = 'https://cdn-icons-png.flaticon.com/128/3313/3313888.png';
const drizzleSky = 'https://cdn-icons-png.flaticon.com/128/2057/2057965.png';
const stormSky = 'https://cdn-icons-png.flaticon.com/128/3238/3238823.png';
const smokeSky = 'https://cdn-icons-png.flaticon.com/128/7398/7398112.png';

const url = "https://api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=7e289b4193939a065ebc60aa9b04e4dd&units=imperial";


const requestData = async(url)=>{
    const response = await fetch(url);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }
};

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const displayResults = (weatherData)=>{
    let temperature = parseInt(weatherData.main.temp);
    currentTemp.innerHTML = temperature;

    let wSpeed = weatherData.wind.speed;
    cWind.innerHTML = wSpeed;

    let mainCondition = weatherData.weather[0].main;
    if (mainCondition === 'Clouds'){
        iconImg = cloudSky;
    }   else if(mainCondition === 'Clear'){
        iconImg = sunSky;
    }   else if(mainCondition === 'Rain'){
        iconImg = rainSky;
    }   else if(mainCondition === 'Drizzle'){
        iconImg = drizzleSky;
    }   else if(mainCondition === '	Thunderstorm'){
        iconImg = stormSky;
    }   else if(mainCondition === 'Smoke'){
        iconImg = smokeSky;
    }   else{
        iconImg = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    };


    
    const descript = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconImg);
    weatherIcon.setAttribute('alt','weather-icon');

    captionDesc.innerText = capFirstLetter(descript);

    const wChill = (35.74 + (0.6212 * temperature))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275 * temperature * Math.pow(wSpeed,0.16));

    const windChill = Math.round(wChill);
    const windChillNa = 'N/A';
    if (temperature <= 50 && wSpeed > 3){
        document.querySelector('#windChill').innerHTML = windChill;
    }   else{
        document.querySelector('#windChill').innerHTML = windChillNa;
    }

};

requestData(url);





