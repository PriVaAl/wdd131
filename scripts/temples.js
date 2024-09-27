const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastMofifiedElement = document.querySelector("#lastModified")
lastMofifiedElement.textContent = "Last Modification: " + document.lastModified;

const hamburgerButton = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});
