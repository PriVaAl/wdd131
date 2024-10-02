let d = new Date();
document.querySelector("#currentYear").innerHTML =`&copy;${d.getFullYear()}`;
const lastMofifiedElement = document.querySelector("#lastModified")
lastMofifiedElement.textContent = "Last Modification: " + document.lastModified;