document.addEventListener('DOMContentLoaded', () => {
  const hamButton = document.querySelector('#secondary-menu');
  const navigation = document.querySelector('.secondary-navigation');
  
  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
  });
  
  
  const headerDynamic2 = document.getElementById('headerDynamic2');
  const defaultHeaderText = 'All';

  const savedHeaderText = localStorage.getItem('headerDynamicText') || defaultHeaderText;

  headerDynamic2.textContent = savedHeaderText;
  filterRecipes(savedHeaderText);

  const menuItems = document.querySelectorAll('.secondary-navigation ul li a');
  menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));

  function handleMenuItemClick(event) {
      event.preventDefault();

      const menuItemText = event.target.textContent.trim();
      headerDynamic2.textContent = menuItemText;
      localStorage.setItem('headerDynamicText', menuItemText);
      filterRecipes(menuItemText);
  }
}); 

const recipes = [
    {
      name: "Italian Lasagna",
      country: "Italy",
      mealType: "Dinner",
      ingredients: ["Pasta sheets", "Ground beef", "Tomato sauce", "Ricotta, Mozzarella,Parmesan cheese", "Herbs and spices"],
      procedure: ["Cook the ground beef until browned.", "Layer pasta sheets, meat sauce, ricotta, and mozzarella in a baking dish.", "Repeat layers until ingredients are used.", "Top with Parmesan and bake at 375°F for 45 minutes."],
      imageUrl: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg",
      description: "A traditional family recipe with layers of pasta, cheese, and rich meat sauce."
    },
    {
      name: "Chinese Jiao Zi",
      country: "China",
      mealType: "Dinner",
      ingredients: ["Dumpling wrappers", "Ground pork", "Chopped Chinese cabbage", "Garlic", "Ginger", "Soy sauce", "Green onions"],
      procedure: ["Mix pork, cabbage, garlic, ginger, and seasonings in a bowl.", "Place a spoonful of filling in each wrapper and fold.", "Steam or pan-fry until cooked through."],
      imageUrl: "https://media.30seconds.com/tip/lg/Jiaozi-Recipe-38770-4aad6738de-1644158630.jpg",
      description: "Fresh and delicious gyoza made with pork and Chinese cabbage."
    },
    {
      name: "Caribbean Rice and Beans",
      country: "Costa Rica",
      mealType: "Dinner",
      ingredients: ["White rice", "Red beans", "Coconut milk", "Onion", "Garlic", "Bell pepper", "Spices (thyme, allspice)"],
      procedure: ["Sauté onion and garlic until soft.", "Add beans, rice, coconut milk, and spices.", "Cook until rice is tender and liquid is absorbed."],
      imageUrl: "https://res.cloudinary.com/dwb6ecajn/image/upload/c_scale,w_1000/v1619213076/cocinaQ/Rice%20and%20beans%20y%20agua%20de%20sapo/rice-and-beans-main_nvupxq.jpg",
      description: "Spicy and flavorful Caribbean recipe of rice, beans, and meat."
    },
    {
      name: "Persian Jujeh Kebab",
      country: "Iran",
      mealType: "Dinner",
      ingredients: ["Chicken pieces", "Saffron", "Onion", "Lemon juice", "Spices (turmeric, cumin)", "Tomatoes"],
      procedure: ["Marinate chicken with saffron, lemon juice, and spices for a few hours.", "Skewer and grill until cooked through.", "Serve with grilled tomatoes and saffron rice."],
      imageUrl: "https://picturetherecipe.com/wp-content/uploads/2018/05/Joojeh-Kebab-Insta-1.jpg",
      description: "Grilled chicken served with grilled tomatoes, saffron rice, and butter."
    },
    {
      name: "Italian Spaghetti Carbonara",
      country: "Italy",
      mealType: "Lunch",
      ingredients: ["Spaghetti", "Pancetta or guanciale", "Eggs", "Pecorino Romano cheese", "Black pepper"],
      procedure: ["Boil spaghetti until al dente.", "Cook pancetta in a pan until crispy.", "Whisk eggs with cheese and black pepper.", "Combine spaghetti with pancetta and egg mixture off the heat. Stir until creamy."],
      imageUrl: "https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/1:1/w_2560%2Cc_limit/pasta-carbonara.jpg",
      description: "Creamy pasta with eggs, cheese, pancetta, and black pepper."
    },
    {
      name: "Chinese Kung Pao Chicken",
      country: "China",
      mealType: "Lunch",
      ingredients: ["Chicken breast", "Peanuts", "Bell peppers, Green onions", "Ginger, Garlic", "Soy sauce, Vinegar, Sugar"],
      procedure: ["Marinate chicken in soy sauce.", "Stir-fry chicken, ginger, garlic, bell peppers, green onions, and peanuts.", "Pour sauce mixture and cook until thickened."],
      imageUrl: "https://www.cookhomey.com/wp-content/uploads/Recipe-for-Kung-Pao-Chicken.jpg",
      description: "Spicy stir-fried chicken with peanuts, vegetables, and a flavorful sauce."
    },
    {
      name: "Costa Rican Gallo Pinto",
      country: "Costa Rica",
      mealType: "Lunch",
      ingredients: ["Cooked rice", "Black beans", "Onion", "Red bell pepper", "Garlic", "Salsa Lizano (optional)"],
      procedure: ["Sauté onion, garlic, and bell pepper.", "Add black beans and salsa Lizano.", "Mix in cooked rice and stir until evenly heated.", "Serve with fried eggs and plantains."],
      imageUrl: "https://blog.mabeglobal.com/wp-content/uploads/2024/03/como-hacer-gallo-pinto-1024x683.jpg",
      description: "Classic Costa Rican rice and beans dish served with eggs, plantains, and sour cream."
    },
    {
      name: "Iranian Fesenjan",
      country: "Iran",
      mealType: "Lunch",
      ingredients: ["Chicken pieces", "Walnuts", "Pomegranate molasses", "Onion", "Turmeric", "Spices (cinnamon, cardamom)"],
      procedure: ["Sauté onions and chicken with turmeric.", "Add ground walnuts and water, simmer until thickened.", "Stir in pomegranate molasses and cook until chicken is done."],
      imageUrl: "https://i0.wp.com/www.nourishdeliciously.com/wp-content/uploads/2022/01/DSC_4299-3.jpg",
      description: "(Pomegranate Walnut Stew) Rich stew with chicken, ground walnuts, and pomegranate molasses, served with rice."
    }
];

function createRecipeCard(filterRecipes) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ''; 

  filterRecipes.forEach((recipe) => {
      const card = document.createElement("section");
      card.innerHTML = `
          <img src="${recipe.imageUrl}" alt= "${recipe.name}" loading="lazy" width="320" height="200">
          <h3>${recipe.name}</h3>
          <p><span class="label">Country:</span>${recipe.country}</p>
          <p><span class="label">Type of Meal:</span>${recipe.mealType}</p>
          <p><span class="label">Description:</span>${recipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
          <h4>Procedure:</h4>
          <ol>${recipe.procedure.map(step => `<li>${step}</li>`).join('')}</ol>
      `;
       container.appendChild(card);
  });
}

function filterRecipes(criteria) {
  let filterRecipes = [];
  switch(criteria) {
      case 'China':
          filterRecipes = recipes.filter(recipe => (recipe.country) === "China");
          break 
        
      case 'Costa Rica':
          filterRecipes = recipes.filter(recipe => (recipe.country) === "Costa Rica");
          break 

      case 'Italy':
          filterRecipes = recipes.filter(recipe => (recipe.country) === "Italy");
          break 
        
      case 'Iran':
          filterRecipes = recipes.filter(recipe => (recipe.country) === "Iran");
          break  
         
      case 'Lunch':
          filterRecipes = recipes.filter(recipe => (recipe.mealType) === "Lunch");
          break 
        
      case 'Dinner':
          filterRecipes = recipes.filter(recipe => (recipe.mealType) === "Dinner");
          break 
        
      default: 
          filterRecipes = recipes;
          break
  }

  createRecipeCard(filterRecipes);
}
