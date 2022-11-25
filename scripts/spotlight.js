const sSource = "/chamber/json/data.json";

const requestSpotlights = async(sSource)=>{
    const sResponse = await fetch(sSource);
    console.log(sResponse);

    if(sResponse.ok === true){
        const sData = await sResponse.json();
        console.log(sData);
        const spotlights = sData.companies;
        displaySpotlight(spotlights[0],'.Spotlight-1');
        displaySpotlight(spotlights[5],'.Spotlight-2')
    }
    else{
        console.log('Proably the file or url you are requesting does not exist or it is wrong')
    }
};

const displaySpotlight = (spotlights,sectionCLass) =>{
    const sTitle = document.createElement('h3');
    const sLogo = document.createElement('img');
    const sPhone = document.createElement('p');
    const sWeb = document.createElement('a');
    const sInfo = document.createElement('p');
    const sLevel = document.createElement('img');

    sLogo.setAttribute('src',spotlights.imgurl);
    sLogo.setAttribute('alt',`Logo image of ${spotlights.name}`);
    sLogo.setAttribute('loading','lazy');
    sWeb.setAttribute('href',spotlights.website);

    sTitle.textContent = spotlights.name;
    sPhone.textContent = `Phone: ${spotlights.phone}`
    sWeb.textContent = spotlights.website;
    sInfo.textContent = "Member Level";
    if(spotlights.membershipLevel === "Gold"){
        sLevel.setAttribute('src','/chamber/images/rsz_gold-coin.png');
        sLevel.setAttribute('alt','Golden coin logo for gold members');
        sLevel.setAttribute('id','spotImg-g');
    }else if(spotlights.membershipLevel === "Silver"){
        sLevel.setAttribute('src','/chamber/images/rsz_silver-coin.png');
        sLevel.setAttribute('alt','Silver coin logo for silver members');
        sLevel.setAttribute('id','spotImg-s');
    }

    document.querySelector(sectionCLass).appendChild(sLogo);
    document.querySelector(sectionCLass).appendChild(sTitle);
    document.querySelector(sectionCLass).appendChild(sPhone);
    document.querySelector(sectionCLass).appendChild(sWeb);
    document.querySelector(sectionCLass).appendChild(sInfo);
    document.querySelector(sectionCLass).appendChild(sLevel);

}

requestSpotlights(sSource);