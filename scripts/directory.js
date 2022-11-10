const dSource = "/chamber/json/data.json"

const requestData = async(dSource)=>{
    const response = await fetch(dSource);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        let business = data.companies;
        business.forEach(displayCompanies);
    }
    else{
        console.log('Proably the file or url you are requesting does not exist or it is wrong')
    }
}

const displayCompanies = (business)=>{
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let bImage = document.createElement('img');
    let bWeb = document.createElement('a');
    let bAddress = document.createElement('p');
    let bPhone = document.createElement('p');
    let bMembership = document.createElement('h4');

    bImage.setAttribute('src', business.imgurl);
    bImage.setAttribute('alt', `Logo image of ${business.name}`);
    bImage.setAttribute('loading','lazy');
    bWeb.setAttribute('href',`${business.website}`)
    card.setAttribute('id','card-content')

    h3.textContent = `${business.name}`;
    bAddress.textContent = `Address: ${business.address}`;
    bWeb.textContent = `Website: ${business.website}`;
    bPhone.textContent = `Phone number: ${business.phone}`
    bMembership.textContent = `Membership: ${business.membershipLevel}`

    card.appendChild(h3);
    card.appendChild(bImage);
    card.appendChild(bAddress);
    card.appendChild(bPhone);
    card.appendChild(bWeb);
    card.appendChild(bMembership);

    document.querySelector('div.cards').appendChild(card);
}


requestData(dSource);