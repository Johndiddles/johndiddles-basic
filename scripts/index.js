const data = [
  {
    id: 0,
    name: "DLI Library",
    imageUrl: "../assets/library.png",
    previewUrl: "https://dli-library.vercel.app/",
    codeBaseUrl: "https://github.com/Johndiddles/dli-library",
    description:
      "An e-library that allows you download soft copies of all modules freely available to all dli students of the University of Lagos. This project seeks to ease access to study materials for student. Built with React Js, Redux, Node Js, Express Js, Mongo DB",
  },

  {
    id: 1,
    name: "BloodHQ",
    imageUrl: "../assets/bloodhq.png",
    previewUrl: "https://bloodhq.netlify.app/",
    codeBaseUrl: "https://github.com/Johndiddles/bloodfinder-fe-pjt-12",
    description:
      "An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers. Built with ReactJs, bootstrap, redux, sass and flutterwave payment system",
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
    imageUrl: "../assets/bjscomf.png",
    previewUrl: "https://bjscomf-v2.netlify.app/",
    codeBaseUrl: "https://github.com/Johndiddles/e-comm",
    description:
      "An e-commerce website for all kinds of wears. Built with React, redux, firebase and Sass using stripe payment system to finalize orders.",
  },
  {
    id: 4,
    name: "Countries Listing App",
    imageUrl: "../assets/countries.png",
    previewUrl: "https://jovial-curie-b94496.netlify.app/",
    codeBaseUrl: "https://github.com/Johndiddles/fem-countries",
    description:
      "An app that helps you set your budgets and helps you keep track of all your expenses. Built with ReactJs, and Bootstrap 5.",
  },
  // {
  //   id: 5,
  //   name: "Budget App",
  //   imageUrl: "../assets/budget.png",
  //   previewUrl: "https://budget-app-sepia-ten.vercel.app",
  //   codeBaseUrl: "https://github.com/Johndiddles/budget-app",
  //   description:
  //     "An app that helps medical labs and hospitals find exact blood match from nearest possible locations during emergencies and eases the delivery of critical medical supplies most especially, blood pants from labs to labs or hospitals or emergency centers. Built with ReactJs, bootstrap, redux, sass and flutterwave payment system",
  // },
  // {
  //   id: 6,
  //   name: "Music App",
  //   imageUrl: "../assets/music-app.png",
  //   previewUrl: "https://diddles-music.vercel.app",
  //   codeBaseUrl: "https://github.com/Johndiddles/music-player",
  //   description:
  //     "A basic music player built with vanilla JS. Next version of the music player will be fetching music files from a free open api with more features to be added.",
  // },
  {
    id: 7,
    name: "Ristorante Con Fusion",
    imageUrl: "../assets/ristorante.png",
    previewUrl: "https://nifty-meitner-eb6db5.netlify.app/",
    codeBaseUrl:
      "https://bitbucket.org/JohnDiddles/learning_bootstrap/src/master/",
    description:
      "A restaurant app that allows customers to find information about the restaurant, dishes, reserve tables online and send feedbacks to the restaurant. This website was built with HTML and Bootstrap 4.",
  },
];

const testimonies = [
  {
    id: 1,
    name: "Belle",
    testimony:
      "He's a comedian, lol, cracks me up with his funny lines in the channel. His presence was felt the moment he was added to the team; his quirkiness, swiftness to delivering tasks, good eyes for detail. There's no contention that he's a great addition to the team.",
    location: "Zuri Chat",
    imageUrl: "../assets/avatar.png",
  },
  {
    id: 2,
    name: "Devvyhac",
    testimony:
      "He is a great developer but his modesty is out of this world. He is a funny team mate and always active. He can clone Facebook in just 2 weeks.",
    location: "Zuri Chat",
    imageUrl: "../assets/avatar.png",
  },
  {
    id: 3,
    name: "Damilola Emmanuel",
    testimony:
      "Love his work. He completed the implementation of a design taking forever in no time. I was honestly shocked at the speed and precision with which he delivered. What I'm trying to say is, Johndiddles is an amazing developer and I'm honoured to have been able to work with him.",
    location: "Zuri Chat",
    imageUrl: "../assets/avatar.png",
  },
  {
    id: 4,
    name: "Omzi",
    testimony:
      "A seasoned FE dev that always delivers 💪. Would love to work with him again 🙂.",
    location: "Zuri Chat",
    imageUrl: "../assets/avatar.png",
  },
];

for (let i = 0; i < data.length; i++) {
  const portfolio = data[i];

  document.getElementById("portfolio")
    ? (document.getElementById("portfolio").innerHTML += `
    <div class="portfolio">
    <div class="portfolio-img">
      <img loading="lazy" src=${portfolio.imageUrl} alt="bloodhq">
    </div>

    <div class="portfolio-details">
      <h2 class="portfolio-details-header">${portfolio.name}</h2>
      <p class="portfolio-details-description">${portfolio.description}</p>
      <div class="portfolio-links">
        <a href=${portfolio.previewUrl} class="preview-site" target="_blank">Preview</a>
        <a href=${portfolio.codeBaseUrl} class="view-code" target="_blank">View code</a>
      </div>
    </div>
  </div>`)
    : null;
}

("use strict");
(function () {
  var cursorInner = document.querySelector(".cursor-inner");
  var cursorOuter = document.querySelector(".cursor-outer");

  var editCursor = function editCursor(event) {
    cursorInner.style.left = event.clientX + "px";
    cursorInner.style.top = event.clientY + "px";
    cursorOuter.style.left = event.clientX + "px";
    cursorOuter.style.top = event.clientY + "px";
  };

  window.addEventListener("mousemove", editCursor);
})();

let presentTestimony = 0;
const time = 10000;

function changeTestimony() {
  document.getElementById("testimonies")
    ? (document.getElementById("testimonies").innerHTML = `
    <div class="testimonies-card">
      <div class="testimony-card-content">
        <div class="testimony-card-front">
          <p class="testimony">${testimonies[presentTestimony].testimony}</p>
        </div>

        <div class="testimony-card-back">
        <div class="author-details">
          <img lodaing="lazy" src=${testimonies[presentTestimony].imageUrl} />
          <p class="author">${testimonies[presentTestimony].name}
          <br>
          <span class="location">${testimonies[presentTestimony].location}</span></p>
        </div>
          
        </div>
      </div>
      
    </div>`)
    : null;

  if (presentTestimony < testimonies.length - 1) {
    presentTestimony++;
  } else {
    presentTestimony = 0;
  }

  setTimeout("changeTestimony()", time);
}

window.onload = changeTestimony;

window.onscroll = function () {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const scrollHeight = window.scrollY;
  const heroHeight = document.querySelector(".hero").offsetHeight;

  scrollHeight >= heroHeight - headerHeight
    ? document.querySelector(".header").classList.add("toggleHeader")
    : document.querySelector(".header").classList.remove("toggleHeader");
};

// const submitBtn = document.getElementById("submit");
// function formHandler(e) {
//   const form = document.getElementById("form");
//   e.preventDefault();
//   form.checkValidity() ? alert("submitted") : form.reportValidity();
//   window.location.href = "/index.html";
// }
// submitBtn.addEventListener("click", (e) => {

// });
