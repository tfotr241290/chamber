function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

let options = {weekday:'long',day:'numeric',month:'short',year:'numeric'};
let currentDate = new Date();


document.getElementById('current-date').innerHTML = currentDate.toLocaleDateString('en-US', options);