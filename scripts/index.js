import { testimonies, projects } from "./data.js";

for (let i = 0; i < projects.length; i++) {
  const portfolio = projects[i];

  document.getElementById("portfolio")
    ? (document.getElementById("portfolio").innerHTML += `
    <div class="portfolio">
    <div class="portfolio-img">
      <img loading="lazy" src=${portfolio.imageUrl} alt=${portfolio.name}>
    </div>

    <div class="portfolio-details">
      <h2 class="portfolio-details-header">${portfolio.name}</h2>
      <p class="portfolio-details-description">${portfolio.description}</p>
      <div class="portfolio-links">
        <a href=${
          portfolio.previewUrl
        } class="preview-site" target="_blank">Preview</a>
        ${
          portfolio.codeBaseUrl
            ? `<a href=${portfolio.codeBaseUrl} class="view-code" target="_blank">View code</a>`
            : ""
        }
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
          <img lodaing="lazy" src=${testimonies[presentTestimony].imageUrl} alt=${testimonies[presentTestimony].name} />
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
}

window.onload = () => {
  changeTestimony();
  setInterval(() => changeTestimony(), time);
};

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
