const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastMofifiedElement = document.querySelector("#lastModified")
lastMofifiedElement.textContent = "Last Modification: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
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

    const menuItems = document.querySelectorAll('.navigation ul li a');

    function handleMenuItemClick(event) {
        event.preventDefault();
        
    
        const menuItemText= event.target.textContent.trim();
        headerDynamic.textContent = menuItemText;
        
        localStorage.setItem('headerDynamicText', menuItemText);

        const href = event.target.getAtribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 100);
    }

    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
});