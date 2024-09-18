// TODO: turn content by appending new element to div#content once page is loaded


export const content = () => {
    const mainPage = document.getElementById("content");

    const homePage = document.createElement("div");
    homePage.classList.add("homePage");

    const welcomeText = document.createElement("p");
    welcomeText.classList.add("welcomeText");
    welcomeText.textContent = "Summer Favourites";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Discover our seasonal menu and book your table.";

    homePage.appendChild(welcomeText);
    homePage.appendChild(description);
    mainPage.appendChild(homePage);

    const midDiv = document.createElement("div");
    midDiv.classList.add("midDiv");
    
    const midDivText = document.createElement("div");
    midDivText.classList.add("midDivText");
    midDivText.textContent = "Discover the finest flavors and culinary delights at our Mexican restaurant.\n\nJoin us for a memorable dining experience in a warm and inviting atmosphere inspired by the vibrant culture of Mexico."
    midDivText.style.whiteSpace = 'pre-line';



    
    midDiv.appendChild(midDivText);
    mainPage.appendChild(midDiv);


  
    console.log("content"); 
}

