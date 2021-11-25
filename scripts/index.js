const data = [
    {
        id: 1,
        name: 'BloodHQ',
        imageUrl: '../assets/bloodhq.png',
        previewUrl: '#',
        codeBaseUrl: '#',
        description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers. Built with ReactJs, bootstrap, redux, sass and flutterwave payment system'
    },
    // {
    //     id: 2,
    //     name: "Johndiddles' Portfolio",
    //     imageUrl: p1,
    //     previewUrl: '#',
    //     codeBaseUrl: '#',
    //     description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers.'
    // },
    {
        id: 3,
        name: "Bj's Comf",
        imageUrl: '../assets/bjscomf.png',
        previewUrl: '#',
        codeBaseUrl: '#',
        description: 'An e-commerce website for all kinds of wears. Built with React, redux, firebase and Sass using stripe payment system to finalize orders.'
    },
    {
        id: 4,
        name: "Countries Rest API App",
        imageUrl: '../assets/bjscomf.png',
        previewUrl: '#',
        codeBaseUrl: '#' ,
        description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers.'
    },
    {
        id: 5,
        name: "Ristorante Con Fusion",
        imageUrl: '../assets/ristorante.png',
        previewUrl: '#',
        codeBaseUrl: '#',
        description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers.' 
    },
    // {
    //     id: 6,
    //     name: 'Blogr',
    //     imageUrl: p6,
    //     previewUrl: '#',
    //     codeBaseUrl: '#',
    //     description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers.' 
    // },
    // {
    //     id: 7,
    //     name: 'Faq',
    //     imageUrl: p7,
    //     previewUrl: '#',
    //     codeBaseUrl: '#' ,
    //     description: 'An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers.'
    // }
]

const testimonies = [
    {
        id: 1,
        name: 'Belle',
        testimony: "He's a comedian, lol, cracks me up with his funny lines in the channel. His presence was felt the moment he was added to the team; his quirkiness, swiftness to delivering tasks, good eyes for detail. There's no contention that he's a great addition to the team.",
        location: 'Zuri Chat'
    },
    {
        id: 2,
        name: 'Devvyhac',
        testimony: "He is a great developer but his modesty is out of this world. He is a funny team mate and always active. He can clone Facebook in just 2 weeks.",
        location: 'Zuri Chat'
    },
    {
        id: 3,
        name: 'Damilola Emmanuel',
        testimony: "Love his work. He completed the implementation of a design taking forever in no time. I was honestly shocked at the speed and precision with which he delivered. What I'm trying to say is, Johndiddles is an amazing developer and I'm honoured to have been able to work with him.",
        location: 'Zuri Chat'
    },
    {
        id: 4,
        name: 'Omzi',
        testimony: "A seasoned FE dev that always delivers 💪. Would love to work with him again 🙂.",
        location: 'Zuri Chat'
    }
]

for (let i=0; i < data.length; i++){
    const portfolio = data[i];

    document.getElementById('portfolio').innerHTML += `<div class="portfolio">
    <div class="portfolio-img">
      <img src=${portfolio.imageUrl} alt="bloodhq">
    </div>

    <div class="portfolio-details">
      <h2 class="portfolio-details-header">${portfolio.name}</h2>
      <p class="portfolio-details-description">${portfolio.description}</p>
      <div class="portfolio-links">
        <a href=${portfolio.previewUrl} class="preview-site">Preview</a>
        <a href=${portfolio.codeBaseUrl} class="view-code">View code</a>
      </div>
    </div>
  </div>`
}

    let presentTestimony = 0
    const time = 8000;


    function changeTestimony(){


    document.getElementById('testimonies').innerHTML = `<div class="testimonies-card">
    <p class="testimony">${testimonies[presentTestimony].testimony}</p>
    <br>
    <p class="author">${testimonies[presentTestimony].name}<span class="location">${testimonies[presentTestimony].location}</span></p>
  </div>`

    if(presentTestimony < testimonies.length - 1){
        presentTestimony++;
    } else {
        presentTestimony = 0
    }

    setTimeout('changeTestimony()', time);
    }

    window.onload = changeTestimony;
 

window.onscroll = function(){
const headerHeight = document.querySelector('.header').offsetHeight
const scrollHeight = window.scrollY;
const heroHeight = document.querySelector('.hero').offsetHeight;

scrollHeight >= heroHeight - headerHeight 
    ? 
  document.querySelector('.header').classList.add('toggleHeader') 
    : 
  document.querySelector('.header').classList.remove('toggleHeader');

}

