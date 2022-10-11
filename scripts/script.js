function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

//Different way to format date
const currentDate = document.getElementById('current-date');
const cDate = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(cDate);
currentDate.innerHTML = `${fullDate}`;


document.getElementById('current-date').innerHTML = formattedDate.toLocaleDateString('en-US')

const dateOptions = {weekday:'long',day:'numeric',month:'short',year:'numeric',hour:'2-digit', minute:'2-digit'}
const date = new Date(document.lastModified);
document.getElementById("date").innerHTML = date.toLocaleDateString('en-US', dateOptions);
