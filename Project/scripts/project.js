const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified")
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const headerDynamic = document.getElementById('headerDynamic');
    const defaultHeaderText = 'Heritage Kitchen';
    const menuItems = document.querySelectorAll('.navigation ul li a');
    
   
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    
    const savedHeaderText = localStorage.getItem('headerDynamicText');
    if (savedHeaderText) {
        headerDynamic.textContent = savedHeaderText;
    } else {
        headerDynamic.textContent = defaultHeaderText;
    }

    
    function handleMenuItemClick(event) {
        event.preventDefault();
        const menuItemText = event.target.textContent.trim();
        headerDynamic.textContent = menuItemText;
        localStorage.setItem('headerDynamicText', menuItemText);

        
        const href = event.target.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 100);
    }

   
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
});

