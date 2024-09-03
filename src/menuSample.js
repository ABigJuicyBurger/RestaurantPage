export const menuSample = () => {
  const midDiv = document.querySelector(".midDiv");

  const menuImageDiv = document.createElement("div");
  menuImageDiv.classList.add("menuImageDiv");

  const recipeNames = ["Menudo/Mole de Panza", "Enchilada (beef)", "Tacos al pastor (pork)", "Salbutes (turkey)"]

  const numberOfImages = 4;

  for (let i = 0; i < numberOfImages; i++ ) {
  const menuCombo = document.createElement("div");
  const menuImages = document.createElement("img");
  const menuText = document.createElement("p");

  menuText.classList.add("menuText");
  menuCombo.classList.add("menuCombo");
  
  menuText.textContent = recipeNames[i];
  menuImages.classList.add("menuImages" + i);
  menuImages.dataset.index = i;

  menuImages.style.width = "320px"
  menuImages.style.height = "480px";
  // menuImages.style.objectFit = "cover";

  menuCombo.appendChild(menuImages);
  menuCombo.appendChild(menuText);

  menuImageDiv.appendChild(menuCombo);
  }

  midDiv.appendChild(menuImageDiv);


  console.log("Below main content");
};
