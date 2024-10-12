document.addEventListener('DOMContentLoaded', () => {
  const today = new Date(); // Define today variable
  const year = document.querySelector("#currentyear");
  const lastModifiedElement = document.querySelector("#lastModified");

  year.textContent = `${today.getFullYear()}`;
  lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
  lastModifiedElement.classList.add(`last-modified`);

  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
  });

  const headerDynamic = document.getElementById('headerDynamic');
  const defaultHeaderText = 'Home';

  const savedHeaderText = localStorage.getItem('headerDynamicText') || defaultHeaderText;

  headerDynamic.textContent = savedHeaderText;
  filterTemples(savedHeaderText);

  const menuItems = document.querySelectorAll('.navigation ul li a');
  menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));

  function handleMenuItemClick(event) {
      event.preventDefault();

      const menuItemText = event.target.textContent.trim();
      headerDynamic.textContent = menuItemText;
      localStorage.setItem('headerDynamicText', menuItemText);
      filterTemples(menuItemText);
  }
});
// Array of temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Jose Costa Rica",
        location: "San Jose, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/400x250/san-jose-costa-rica-temple-1162688-wallpaper.jpg"
      },
      {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg"
      },
      {
        templeName: "Salt Lake City",
        location: "Salt Lake City, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
      },
      {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, April, 28",
        area: 16000,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
      }
    // Add more temple objects as needed...
  ];

function createTempleCard(filterTemples) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ""; // Clear existing content

  filterTemples.forEach((temple) => {
      const card = document.createElement("section");

      card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p><span class="label">Location:</span> ${temple.location}</p>
          <p><span class="label">Dedication:</span> ${temple.dedicated}</p>
          <p><span class="label">Size:</span> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="320" height="200">
     `;

      container.appendChild(card);
  });
}  


function filterTemples(criteria) {
  let filterTemples;

  switch (criteria) {
      case 'Old':
          filterTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;

      case 'New':
          filterTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
          break;

      case 'Large':
          filterTemples = temples.filter(temple => temple.area > 90000);
          break;

      case 'Small':
          filterTemples = temples.filter(temple => temple.area < 10000);
          break;

      default:
          filterTemples = temples; // Default to show all temples
          break;
  }
  createTempleCard(filterTemples);
}

