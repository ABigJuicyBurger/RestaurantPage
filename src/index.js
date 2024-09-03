import { header } from "./header.js";
import { content } from "./content.js";
import { menuSample } from "./menuSample.js";
import { menu } from "./menu.js";
import { footer } from "./footer.js";

import { about } from "./about.js";

import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  header();
  content();
  menuSample();
  footer();
});

// will create tab switching logic on menu button (event listener)

const nav = document.querySelector("nav");
console.log(nav);
const menuButton = nav.querySelectorAll("button")[1];
console.log(menuButton);

menuButton.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  menu();
});
