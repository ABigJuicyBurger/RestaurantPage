export const header = () => {
    const title = document.createElement("h1");
    title.classList.add("title");
    const navHeader = document.querySelector("nav");

    title.textContent = "Holy-Guacamole";
    navHeader.appendChild(title);
}