export const menu = () => {
  const mainPage = document.getElementById("content");

  const mealsDiv = document.createElement("div");
  mealsDiv.classList.add("meals");

  const appetizers = document.createElement("div");
  appetizers.classList.add("antojitos");

  const appetizerTitle = document.createElement("h2");
  appetizerTitle.textContent = "Antojitos";
  appetizerTitle.classList.add("category-title");
  appetizers.appendChild(appetizerTitle);

  // Create 5 appetizer elements
  const appetizerNames = [
    "Sopes",
    "Guacamole",
    "Quesadillas",
    "Nachos",
    "Elotes",
  ];
  const appetizerDescriptions = [
    "Fried masa base with toppings",
    "Avocado dip with chips",
    "Grilled tortillas with cheese",
    "Tortilla chips with toppings",
    "Grilled corn on the cob",
  ];
  const appetizerPrices = [8.99, 9.99, 7.99, 10.99, 6.99];

  // make an element 5 times
  for (let i = 0; i < 5; i++) {
    const appetizer = document.createElement("p");
    appetizer.classList.add("appetizer");

    const name = document.createElement("h3");
    name.textContent = appetizerNames[i];

    const description = document.createElement("p");
    description.textContent = appetizerDescriptions[i];

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `$${appetizerPrices[i].toFixed(2)}`;

    appetizer.appendChild(name);
    appetizer.appendChild(description);
    appetizer.appendChild(price);
    appetizers.appendChild(appetizer);
  }

  const entrees = document.createElement("div");
  entrees.classList.add("entrees");

  const entreeTitle = document.createElement("h2");
  entreeTitle.textContent = "Entrees";
  entreeTitle.classList.add("category-title");
  entrees.appendChild(entreeTitle);
  // Create 5 entrees elements

  // Entrees
  const entreeNames = [
    "Enchiladas",
    "Tacos al Pastor",
    "Chiles Rellenos",
    "Mole Poblano",
    "Carne Asada",
  ];
  const entreeDescriptions = [
    "Corn tortillas filled with chicken, covered in sauce",
    "Marinated pork tacos with pineapple",
    "Stuffed poblano peppers with cheese",
    "Chicken in rich chocolate-chili sauce",
    "Grilled beef steak with sides",
  ];
  const entreePrices = [14.99, 13.99, 15.99, 16.99, 18.99];

  for (let i = 0; i < 5; i++) {
    const entree = document.createElement("div");
    entree.classList.add("entree");

    const name = document.createElement("h3");
    name.textContent = entreeNames[i];

    const description = document.createElement("p");
    description.textContent = entreeDescriptions[i];

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `$${entreePrices[i].toFixed(2)}`;

    entree.appendChild(name);
    entree.appendChild(description);
    entree.appendChild(price);
    entrees.appendChild(entree);
  }

  const desserts = document.createElement("div");
  desserts.classList.add("desserts");

  const dessertTitle = document.createElement("h2");
  dessertTitle.textContent = "Desserts";
  dessertTitle.classList.add("category-title");
  desserts.appendChild(dessertTitle);

  const dessertNames = ["Churros", "Flan", "Tres Leches Cake"];
  const dessertDescriptions = [
    "Fried dough pastry with cinnamon sugar",
    "Creamy caramel custard",
    "Sponge cake soaked in three kinds of milk",
  ];
  const dessertPrices = [6.99, 7.99, 8.99];

  for (let i = 0; i < 3; i++) {
    const dessert = document.createElement("div");
    dessert.classList.add("dessert");

    const name = document.createElement("h3");
    name.textContent = dessertNames[i];

    const description = document.createElement("p");
    description.textContent = dessertDescriptions[i];

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `$${dessertPrices[i].toFixed(2)}`;

    dessert.appendChild(name);
    dessert.appendChild(description);
    dessert.appendChild(price);
    desserts.appendChild(dessert);
  }

  const drinks = document.createElement("div");
  drinks.classList.add("drinks");

  const drinkTitle = document.createElement("h2");
  drinkTitle.textContent = "Drinks";
  drinkTitle.classList.add("category-title");
  drinks.appendChild(drinkTitle);

  // Drinks
  const drinkNames = ["Horchata", "Margarita", "Mexican Coca-Cola"];
  const drinkDescriptions = [
    "Sweet rice milk with cinnamon",
    "Tequila cocktail with lime and salt",
    "Coke made with cane sugar",
  ];
  const drinkPrices = [3.99, 8.99, 2.99];

  for (let i = 0; i < 3; i++) {
    const drink = document.createElement("div");
    drink.classList.add("drink");

    const name = document.createElement("h3");
    name.textContent = drinkNames[i];

    const description = document.createElement("p");
    description.textContent = drinkDescriptions[i];

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `$${drinkPrices[i].toFixed(2)}`;

    drink.appendChild(name);
    drink.appendChild(description);
    drink.appendChild(price);
    drinks.appendChild(drink);
  }

  if (mainPage.innerHTML === "") {
    mealsDiv.appendChild(appetizers);
    mealsDiv.appendChild(entrees);
    mealsDiv.appendChild(desserts);
    mealsDiv.appendChild(drinks);
    mainPage.appendChild(mealsDiv);
  }
};
