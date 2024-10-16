const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();

const lastMofifiedElement = document.querySelector("#lastModified")
lastMofifiedElement.textContent = "Last Modification: " + document.lastModified;
document.querySelector("#currentYear").innerHTML =`&copy;${today.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;