import { header } from "./header.js";
import { content } from "./content.js";
import { menuSample } from "./menuSample.js";
import { menu } from "./menu.js";
import { footer } from "./footer.js";
import { about } from "./about.js";

import "./styles.css";

// after any changes git push to main for dev and for deploy simply run git gh-deploy dist //

function emptyContent() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function loadContent() {
  emptyContent();
  header();
  content();
  menuSample();
  footer();
}

function mainPageLoader() {
  emptyContent();
  loadContent();
}
document.addEventListener("DOMContentLoaded", () => {
  loadContent();
});

// will create tab switching logic on menu button (event listener)

const nav = document.querySelector("nav");
console.log(nav);
const homeButton = nav.querySelectorAll("button")[0];
const menuButton = nav.querySelectorAll("button")[1];
console.log(menuButton);

homeButton.addEventListener("click", mainPageLoader);

menuButton.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  menu();
});

const aboutButton = nav.querySelectorAll("button")[2];

aboutButton.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  about();
});

// further ideas:
// make restaurant name fancy text
// add scrollable sample menu
// add dialog form in about for contact form
