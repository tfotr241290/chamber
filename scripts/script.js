function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

//Get the current date in customized format
const cDate = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(cDate);
document.getElementById('current-date').innerHTML = `${fullDate}`;

// Get the last modification date for the footer
const dateOptions = {weekday:'long',day:'numeric',month:'short',year:'numeric',hour:'2-digit', minute:'2-digit'}
const date = new Date(document.lastModified);
document.getElementById("date").innerHTML = date.toLocaleDateString('en-US', dateOptions);

const dayOfWeek = cDate.getDay()

console.log(dayOfWeek)
if (dayOfWeek === 1){
    document.getElementById('header-banner').innerHTML = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
else{
    const bannerHeader = document.getElementById('header-banner');
    bannerHeader.remove();
}
