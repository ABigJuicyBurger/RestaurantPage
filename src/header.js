export const header = () => {
    const existingHeader = document.querySelector("nav h1.title");
    if (existingHeader) return;

    const title = document.createElement("h1");
    title.classList.add("title");
    const navHeader = document.querySelector("nav");

    title.textContent = "Holy-Guacamole";
    navHeader.appendChild(title);
};
