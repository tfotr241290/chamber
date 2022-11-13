function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
    document.querySelector('#social-media').classList.toggle('open');
    document.querySelector('#current-date').classList.toggle('open');
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
if (dayOfWeek === 1 || dayOfWeek === 2){
    document.getElementById('header-banner').innerHTML = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
else{
    const bannerHeader = document.getElementById('header-banner');
    bannerHeader.remove();
}

let myImages = document.querySelectorAll('img[data-src]')


function loadImages(image){
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    myImages.forEach((img) => {
      observer.observe(img);
    });
  } else {
    myImages.forEach((img) => {
      loadImages(img);
    });
  }
