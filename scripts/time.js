const difVisit = document.querySelector(".difVisit");
const pElement = document.querySelector(".visits p");

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
console.log(lastVisit)
const d = new Date();
const time = d.getTime();
console.log(time)
const dif = (time - lastVisit);
console.log(dif)

const currentHr = d.getHours() + ':' + d.getMinutes();
document.getElementById('t_date').value = `${fullDate} ${currentHr}`


const difSeconds = Math.round(dif/1000);
const difMinutes = Math.round(dif/minute);
const difHours = Math.round(dif/hour);
const difDays = Math.round(dif/day);
let timeText = "Days since last visit: " + difDays;  
difVisit.textContent = timeText;


if (lastVisit === 0) {
    pElement.textContent = `This is your first visit!`;
	
} 
else {
    difVisit.textContent = timeText;
	
}


localStorage.setItem("lastVisit", time);