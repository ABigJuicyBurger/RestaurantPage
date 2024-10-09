export const menuSample = () => {
  const midDiv = document.querySelector(".midDiv");

  // Create Slide container
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("sliderContainer");

  // Create slider
  const slider = document.createElement("div");
  slider.classList.add("slider");

  const recipeNames = [
    "Menudo/Mole de Panza",
    "Enchilada (beef)",
    "Tacos al pastor (pork)",
    "Salbutes (turkey)",
    "Quesadilla",
    "Tamales",
  ];

  const imageNames = [
    "menudo",
    "enchilada",
    "tacosalpastor",
    "salbutes",
    "quesadilla",
    "tamales",
  ];

  // Create slides
  for (let i = 0; i < recipeNames.length; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const menuImages = document.createElement("img");
    menuImages.classList.add("menuImages" + i);
    menuImages.dataset.index = i;
    menuImages.src = require(`../src/mealpictures/${imageNames[i]}.jpg`);
    menuImages.style.width = "320px";
    menuImages.style.height = "480px";

    menuImages.alt = recipeNames[i];

    const menuText = document.createElement("p");
    menuText.classList.add("menuText");
    menuText.textContent = recipeNames[i];

    slide.appendChild(menuImages);
    slide.appendChild(menuText);
    slider.appendChild(slide);
  }

  // Create navigation arrows
  const prevArrow = document.createElement("button");
  prevArrow.classList.add("slider-arrow", "prev");
  prevArrow.innerHTML = "&#10094;";

  const nextArrow = document.createElement("button");
  nextArrow.classList.add("slider-arrow", "next");
  nextArrow.innerHTML = "&#10095;";

  // Append arrows to sliderContainer
  sliderContainer.appendChild(prevArrow);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(nextArrow);

  midDiv.appendChild(sliderContainer);

  //Slide rfunction
  let currentSlide = 0;

  // After creating all slides
  // After creating all slides
  const slides = slider.querySelectorAll(".slide");
  const firstClone = slides[0].cloneNode(true);
  const secondClone = slides[1].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  const secondLastClone = slides[slides.length - 2].cloneNode(true);

  slider.appendChild(firstClone);
  slider.appendChild(secondClone);
  slider.insertBefore(lastClone, slides[0]);
  slider.insertBefore(secondLastClone, slides[0]);

  // Adjust the initial position
  slider.style.transform = `translateX(-${100 / recipeNames.length}%)`;

  // Update showSlide function
  function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const isMobile = window.innerWidth <= 768;

    currentSlide = (n + totalSlides) % totalSlides;

    if (isMobile) {
      slider.style.transform = `translateX(-${currentSlide * 17.5}%)`;
    } else {
      slider.style.transform = `translateX(-${
        (currentSlide + 1) * (100 / (totalSlides - 2))
      }%)`;
    }

    // if we go before 1st slide
    if (currentSlide === 0 && n === -1) {
      slider.style.transition = "none";
      currentSlide = totalSlides / 2 - 1;
      slider.style.transform = `translateX(-${
        currentSlide * (100 / (totalSlides / 2))
      }%)`;
      setTimeout(() => {
        slider.style.transition =
          "transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)";
      }, 10);

      // trying to go past last slide
    } else if (currentSlide === totalSlides / 2 - 1 && n === totalSlides / 2) {
      slider.style.transition = "none";
      currentSlide = 0;
      slider.style.transform = `translateX(0)`;
      setTimeout(() => {
        slider.style.transition =
          "transform  0.8s cubic-bezier(0.45, 0, 0.55, 1)";
      }, 10);
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Auto slide
  let interval = setInterval(nextSlide, 5000);

  // Event listeners for arrows
  nextArrow.addEventListener("click", nextSlide);
  // if click stop interval
  nextArrow.addEventListener("click", () => {
    clearInterval(interval);
  });

  prevArrow.addEventListener("click", prevSlide);
  prevArrow.addEventListener("click", () => {
    clearInterval(interval);
  });

  // Show initial
  showSlide(0);

  console.log("Below main content");
};
