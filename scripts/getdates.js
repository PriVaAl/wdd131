// Select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dayofweek = document.querySelector("#dayofweek");

// Use the Date object
const today = new Date();

// Display date formats
full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}</span>`;
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today)}</span>`;
short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(today)}</span>`;
medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(today)}</span>`;

// Display individual date components
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth() + 1}</span>`; // months are 0-based
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;

// Set the copyright year in the footer
document.getElementById("currentyear").textContent = today.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
