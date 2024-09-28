const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastMofifiedElement = document.querySelector("#lastModified")
lastMofifiedElement.textContent = "Last Modification: " + document.lastModified;

const hamburgerButton = document.getElementById('#hamburger');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    const headerDynamic = document.getElementById('headerDynamic');
    const defaultHeaderText = 'Home';

    const savedHeaderText = localStorage.getItem('headerDynamicText');

    if (savedHeaderText) {
        headerDynamic.textContent = savedHeaderText;
    }else {
        headerDynamic.textContent = defaultHeaderText;
    }

    const hamburgerItems = document.querySelectorAll('.navigation ul li a');

    function handleHamburgerItemClick(event) {
        event.preventDefault();
        
    
        const hamburgerItemText = event.target.textContent.trim();
        headerDynamic.textContent = hamburgerItemText;
        
        localStorage.setItem('headerDynamicText', hamburgerItemText);

        const href = event.target.getAtribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 100);
    }

    hamburgerItems.forEach(item => {
        item.addEventListener('click', handleHamburgerItemClick);
    });
});