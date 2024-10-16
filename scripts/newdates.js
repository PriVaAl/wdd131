const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified")
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
