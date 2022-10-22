const temp = document.querySelector('#temp').value
const wind = document.querySelector('#wind').value
const wChill = (35.74 + (0.6212 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275 * temp * Math.pow(wind,0.16));

const windChill = Math.round(wChill);
const windChillNa = 'N/A';

if (temp <= 50 && wind > 3){
    document.querySelector('#windChill').innerHTML = windChill;
}
else{
    document.querySelector('#windChill').innerHTML = windChillNa;
}