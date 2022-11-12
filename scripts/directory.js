const dSource = "/chamber/json/data.json";

const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');
const display = document.querySelector('article');


const requestData = async(dSource)=>{
    const response = await fetch(dSource);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        const business = data.companies;


        listButton.addEventListener("click",()=>{
            display.classList.add("list");
            display.classList.remove("cards");
            
        });
        gridButton.addEventListener("click",()=>{
            display.classList.add("cards");
            display.classList.remove("list");
            
        })
        business.forEach(displayCompanies);
        
    }
    else{
        console.log('Proably the file or url you are requesting does not exist or it is wrong')
    }
}

const displayCompanies = (business)=>{
    const card = document.createElement('section');
    const title = document.createElement('p');
    const bImage = document.createElement('img');
    const bWeb = document.createElement('a');
    const bAddress = document.createElement('p');
    const bPhone = document.createElement('p');
    const bMembership = document.createElement('h4');

    bImage.setAttribute('src', business.imgurl);
    bImage.setAttribute('alt', `Logo image of ${business.name}`);
    bImage.setAttribute('loading','lazy');
    bWeb.setAttribute('href',`${business.website}`)
    bWeb.setAttribute('id','b-web');
    bAddress.setAttribute('id','b-address');
    bPhone.setAttribute('id','b-phone');
    title.setAttribute('id','b-title');
    card.setAttribute('id','card-content');
    bMembership.setAttribute('id', 'm-level');

    title.textContent = `Company name: ${business.name}`;
    bAddress.textContent = `Address: ${business.address}`;
    bWeb.textContent = `${business.website}`;
    bPhone.textContent = `Phone number: ${business.phone}`
    bMembership.textContent = `Membership: ${business.membershipLevel}`

    card.appendChild(bImage);
    card.appendChild(title);
    card.appendChild(bAddress);
    card.appendChild(bPhone);
    card.appendChild(bWeb);
    card.appendChild(bMembership);

    document.querySelector('.cards').appendChild(card);
};


requestData(dSource);