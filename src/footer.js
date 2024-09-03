import avocadoGif from "./gifs/avocado.gif";
import facebookLogo from './footerlinks/facebooklogo.png';
import instaLogo from './footerlinks/instalogo.png';
import tiktokLogo from './footerlinks/tiktoklogo.png';
import twitterxLogo from './footerlinks/twitterxlogo.png';

export const footer = () => {
  // Add logo and its attribution
  const body = document.querySelector("body");

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logoDiv");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = avocadoGif;
  logo.alt = "Avocado";

  const contactUs = document.createElement("div");
  contactUs.classList.add("contactUs");

  const contactUsLogo = 4;

  for (let i = 0; i < contactUsLogo; i++) {
    const socialMediaLogo = document.createElement("img");
    const logos = [facebookLogo, instaLogo, tiktokLogo, twitterxLogo];
    socialMediaLogo.classList.add("socialMediaLogo" + i);
    socialMediaLogo.src = logos[i];


    socialMediaLogo.style.width = "32px";
    socialMediaLogo.style.height = "32px";
    socialMediaLogo.style.backgroundSize = "cover";
    socialMediaLogo.style.padding = "1px";

    contactUs.appendChild(socialMediaLogo);
  }

  let newsLetter = document.createElement("p");
  newsLetter.classList.add("newsLetter");
  newsLetter.textContent = "Subscribe to our Newsletter";
  contactUs.appendChild(newsLetter);

  let otherLinkNames = ["Blog", "About Us", "Careers", "Press", "Contact Us"];

  let otherLinks = 5;

  for (let i = 0; i < otherLinks; i++) {
    let otherLinks = document.createElement("a");
    otherLinks.classList.add("otherLinks" + i);
    otherLinks.textContent = otherLinkNames[i];

    contactUs.appendChild(otherLinks);
  }



  logoDiv.appendChild(logo);

  footer.appendChild(logoDiv);
  footer.appendChild(contactUs);
  console.log("Footer");

  body.appendChild(footer);
};
