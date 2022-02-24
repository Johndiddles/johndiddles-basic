// hamburger menu handler
const toggleMenu = () => {
  document.getElementById("headerRight").classList.toggle("headerRightHeight");
  document.getElementById(
    "navMenu"
  ).innerHTML = `<div class="cancel" onclick="toggleMenu2()">
    <h3>X</h3>
  </div>`;
};

const toggleMenu2 = () => {
  if (screen.width <= 770) {
    document
      .getElementById("headerRight")
      .classList.toggle("headerRightHeight");

    document.getElementById(
      "navMenu"
    ).innerHTML = `<img src="./assets/menu.png" alt="menu icon" class="menuIcon" onclick="toggleMenu()">`;
  }
};
