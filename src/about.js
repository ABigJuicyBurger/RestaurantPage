export const about = () => {
  const mainPage = document.getElementById("content");
  const projectCreatorDiv = document.createElement("div");

  console.log("Hi");

  const hoursSection = document.createElement("div");
  hoursSection.classList.add("hoursSection");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours of operation";

  const hoursList = document.createElement("ul");
  const hours = [
    "Monday - Thursday: 11:00 AM - 10:00 PM",
    "Friday - Saturday: 11:00 AM - 11:00 PM",
    "Sunday: 12:00 PM - 9:00 PM",
  ];

  hours.forEach((day) => {
    const listItem = document.createElement("li");
    listItem.textContent = day;
    hoursList.appendChild(listItem);
  });

  const locationSection = document.createElement("div");
  locationSection.classList.add("locationSection");

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Our Location";

  const address = document.createElement("p");
  address.innerHTML = "Find our address through console...";
  console.log(
    "Were still under development but thanks for looking at console :))"
  );

  locationSection.appendChild(locationTitle);
  locationSection.appendChild(address);
  projectCreatorDiv.appendChild(locationSection);

  hoursSection.appendChild(hoursTitle);
  hoursSection.appendChild(hoursList);
  projectCreatorDiv.appendChild(hoursSection);

  const projectInfo = document.createElement("p");
  projectInfo.innerHTML =
    "Project created following The Odin Project, 2024 <br> created by <a href='https://github.com/ABigJuicyBurger'>Bader</a>";

  projectCreatorDiv.appendChild(projectInfo);

  mainPage.appendChild(projectCreatorDiv);
};
