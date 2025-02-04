window.onload = function() {
    buttonCloseStart(); 
  }
  
// Array of recipes with URLs and ingredients
const recipes = [
    { 
        url: 'https://www.youtube.com/watch?v=MbdQzjaevXQ&list=PLbS0HkS8Xsoq1j4kiZFLP9w1e3pQADR3g&index=3', 
        image: 'images/plov-student-edition.jpg', 
        title: 'Plov Student Edition',
        author: 'Boris',
        necessities: ['Rice', 'Meat', 'Vegetables', 'Pot'],
        /*description: 'Rice, Meat or Vegetables necessary, all steamed in one pot',*/
        ingredients: ['Rice', 'Beef', 'Carrots', 'Garlic', 'Onions', 'Pot', 'Pan/Wok', ], 
        time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=-heI0TqcxFo', 
        image: 'images/18th-ct-cheese-soup.jpg', 
        title: 'An 18th Century Cheese Soup',
        author: 'Townsends',
        necessities: ['Bread', 'Cheese.'],
        /*description: 'A wholsome historical recipe using just bread and cheese.',*/
        ingredients: ['Cheese', 'Bread', 'Pot', 'Pan/Wok'], 
        time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=9X8VJvoo6y0', 
        image: 'images/7-ways-instantnoodles.jpg', 
        title: '7 Ways to Cook Instant Noodles',
        author: 'Boris',
        necessities: ['Instant Noodles', 'Pan/Wok'],
        /*description: '7 ways to cook instant noodles, contains some comedic exaggeration.',*/
        ingredients: ['Instant Noodles', 'Pan/Wok'], 
        time: 5,
    },
    { url: 'https://www.allrecipes.com/recipe/138924/dorm-room-cheesy-tuna-and-noodles/', 
       image: 'images/tuna-instantnoodles.jpg',
       title: 'Tuna Noodles',
       author: 'JCurphy',
       necessities: ['Tuna', 'Microwave'],
       /*description: 'Bring a twist to instant noodles.',*/
       ingredients: ['Instant Noodles', 'Tuna', 'Microwave'], 
       time: 5,
    },
    { url: 'https://www.youtube.com/watch?v=hDybFLoOcGg', 
       image: 'images/stragonoff.jpg', 
       title: 'Easy Stragonoff',
       author: 'Boris',
       necessities: ['Beef', 'Mushroom', 'Cheese', 'Pan/Wok'],
       description: 'Russian Sauteed beef dish.',
       ingredients: ['Beef', 'Cheese', 'Bread', 'Potatos', 'Pickles', 'Onions', 'Mushrooms', 'Pan/Wok', 'Pot'], 
       time: 20,
    },
    { 
        url: 'https://www.townsends.us/blogs/blog/simple-apple-pudding', 
        image: 'images/simple-apple-pudding.jpg', 
        title: 'The Simplest Apple Pudding Ever',
        author: 'Townsends',
        necessities: ['Apples', 'Dough', 'Oven'],
        description: 'Just an apple and some flour or dough needed.',
        ingredients: ['Apple', 'Flour', 'Oven'], 
        time: 20,
    },
    { url: 'https://www.justlikegranny.com/home/raggmunk-swedish-potato-pancakes', 
        image: 'images/raggmunk.jpg', 
        title: 'Swedish Raggmunk',
        author: 'Ashton',
        necessities: ['Potatoes', 'Oil', 'Pan',],
        description: 'Swedish potato pancakes: bacon, eggs, and jam optional.',
        ingredients: ['Potatoes', 'Bacon', 'Pan', 'Oven', 'Microwave'], 
        time: 25,
    },
    { url: 'https://flolum.com/yangzhou-fried-rice/', 
        image: 'images/yangzhou-fried-rice.jpg', 
        title: 'Yangzhou Fried Rice',
        author: 'Flo',
        necessities: ['Rice', 'Eggs', 'Pan/Wok'],
        description: 'Quick and easy fried rice, wok or pan, your choice.',
        ingredients: ['Rice', 'Eggs', 'Pan', 'Wok', 'Rice', 'Ham', 'Soysauce'], 
        time: 15,
    },
    { url: 'https://www.marionskitchen.com/cantonese-beef-chow-fun-noodles/h?v=iH_K-VbGvVI', 
       image: 'images/Cantonese-Beef-Fried-Noodles.jpg',
       title: 'Cantonese Styled Fried Noodles',
       author: 'Marion',
       necessities: ['Rice', 'Noodles', 'Soy Sauce', 'Pan/Wok'],
       description: 'A cantonese staple, brown perfection.',
       ingredients: ['Rice noodles', 'Beef', 'Pan/Wok', 'Soysauce', 'Oystersauce'], 
       time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=2s7zK07dODw', 
       image: 'images/bowl-of-fragrance.jpg', 
       title: 'A Bowl of Fragrance', 
       author: '胡斌哥美食',
       necessities: ['Eggs', 'Chillies', 'Soy Sauce', 'Pan/Wok'],
       description: 'This Chinese magic does not even have a generally accepted English name, that is how local it is. Make it.',
       ingredients: ['Eggs', 'Soysauce', 'Chillies', 'Woodears', 'Pan/Wok', 'Garlic'], 
       time: 20,
    },
    { url: 'https://fun-chinese-cooking.blogspot.com/2014/11/hunan-style-stir-fried-pork-slices-with.html', 
        image: 'images/hunan-fried-pork.jpg', 
        title: 'Hunan Sitr Fried Pork', 
        author: 'Anon',
        necessities: ['Pork', 'Chillies', 'Garlic', 'Pan/Wok'],
        description: 'Classic chillies and fried pork recipe from southern China.',
        ingredients: ['pork', 'pan', 'chillies', 'wok', 'pan', 'garlic', 'soysauce'], 
        time: 20,
     },   
     { url: 'https://iwashyoudry.com/super-easy-swedish-meatballs/', 
        image: 'images/swedish-meatballs.jpg', 
        title: 'Easy Swedish Meatballs', 
        author: 'Shawn',
        necessities: ['Pork', 'Beef', 'Milk', 'Pan/Wok'],
        description: 'You know what this is.',
        ingredients: ['Pork', 'Beef', 'Milk', 'Pan'], 
        time: 20,
     },   
     { url: 'https://www.food.com/recipe/dill-pickle-ham-pinwheels-ham-rollups-64399', 
        image: 'images/pickle-pinwheel.jpg', 
        title: 'Pickle Pinwheel', 
        author: 'Judikins',
        necessities: ['Tortillas', 'Pickles', 'Cream Cheese', 'Pan/Wok'],
        description: 'Tortillas and pickles necessary for this highly sharable dish.',
        ingredients: ['Ham', 'Tortillas', 'Pickles', 'Cream-cheese'], 
        time: 20,
     },   
     { 
        url: 'https://www.youtube.com/watch?v=x_e4kCtJIHA&list=PLbS0HkS8Xsorrdr3pPk4lP80tUAzfyxP1&index=19&t=2s', 
        image: 'images/potato-peel-recipes.jpg', 
        title: 'Potato Peel Recipes',
        author: 'Boris',
        necessities: ['Potatoes', 'Pan/Wok'],
        description: '7 recipes to up your potato game. There is no waste.',
        ingredients: ['Potatoes', 'Pan/Wok'], 
        time: 15,
    },
    { url: 'https://www.youtube.com/watch?v=-heI0TqcxFo', 
        image: 'images/18th-ct-cheese-soup.jpg', 
        title: '18th Century Cheese Soup',
        necessities: 'Required: Bread and Cheese.',
        description: 'A wholsome historical recipe using just bread and cheese.',
        ingredients: ['cheese', 'bread', 'pot', 'pan'], 
        time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=9X8VJvoo6y0', 
        image: 'images/7-ways-instantnoodles.jpg', 
        title: '7 Ways to Cook Instant Noodles',
        necessities: 'Required: Instant Noodles.',
        description: '7 ways to cook instant noodles, contains some comedic exaggeration.',
        ingredients: ['instant noodels', 'pan'], 
        time: 5,
    },
    { url: 'https://www.allrecipes.com/recipe/138924/dorm-room-cheesy-tuna-and-noodles/', 
       image: 'images/tuna-instantnoodles.jpg',
       title: 'Tuna Noodles',
       necessities: 'Required: Microwave and Tuna',
       description: 'Bring a twist to instant noodles.',
       ingredients: ['instantnoodles', 'tuna', 'microwave'], 
       time: 5,
    },
    { url: 'https://www.youtube.com/watch?v=hDybFLoOcGg', 
       image: 'images/stragonoff.jpg', 
       title: 'Stragonoff',
       necessities: 'Beef, mushroomms, and cheese necessary',
       description: 'Russian Sauteed beef dish.',
       ingredients: ['beef', 'cheese', 'bread', 'potatos', 'pickles', 'onions', 'mushrooms', 'pan', 'pot'], 
       time: 20,
    },
    { 
        url: 'https://www.townsends.us/blogs/blog/simple-apple-pudding', 
        image: 'images/simple-apple-pudding.jpg', 
        title: 'Simple Apple Pudding',
        necessities: 'Required: Apples and Dough',
        description: 'Just an apple and some flour or dough needed.',
        ingredients: ['apple', 'flour', 'oven'], 
        time: 20,
    },
    { url: 'https://www.justlikegranny.com/home/raggmunk-swedish-potato-pancakes', 
        image: 'images/raggmunk.jpg', 
        title: 'Raggmunk',
        necessities: 'Required: Potatoes, Pan and Oil necessary',
        description: 'Swedish potato pancakes: bacon, eggs, and jam optional.',
        ingredients: ['potatoes', 'bacon', 'pan', 'oven', 'microwave'], 
        time: 25,
    },
    { url: 'https://flolum.com/yangzhou-fried-rice/', 
        image: 'images/yangzhou-fried-rice.jpg', 
        title: 'Yangzhou Fried Rice',
        necessities: 'Required: Rice and Eggs.',
        description: 'Quick and easy fried rice, wok or pan, your choice.',
        ingredients: ['rice', 'eggs', 'pan', 'wok', 'rice', 'ham', 'soysauce'], 
        time: 15,
    },
    { url: 'https://www.youtube.com/watchttps://www.marionskitchen.com/cantonese-beef-chow-fun-noodles/h?v=iH_K-VbGvVI', 
       image: 'images/Cantonese-Beef-Fried-Noodles.jpg',
       title: 'Cantonese Styled Fried Noodles',
       necessities: 'Required: Rice Noodles, Soy Sauce.',
       description: 'A cantonese staple, brown perfection.',
       ingredients: ['rice noodles', 'beef', 'pan', 'wok', 'soysauce', 'oystersauce'], 
       time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=2s7zK07dODw', 
       image: 'images/bowl-of-fragrance.jpg', 
       title: 'A Bowl of Fragrance', 
       necessities: 'Required: Eggs, Chillies.',
       description: 'This Chinese magic does not even have a generally accepted English name, that is how local it is. Make it.',
       ingredients: ['egg', 'pan', 'chillies', 'woodears', 'wok', 'pan', 'garlic'], 
       time: 20,
    },
    { url: 'https://fun-chinese-cooking.blogspot.com/2014/11/hunan-style-stir-fried-pork-slices-with.html', 
        image: 'images/hunan-fried-pork.jpg', 
        title: 'Hunan Sitr Fried Pork', 
        necessities: 'Required: Pork, Chillies, Garlic.',
        description: 'Pork, Jallepenos, garlic necessary.',
        ingredients: ['pork', 'pan', 'chillies', 'wok', 'pan', 'garlic', 'soysauce'], 
        time: 20,
     },   
     { url: 'https://iwashyoudry.com/super-easy-swedish-meatballs/', 
        image: 'images/swedish-meatballs.jpg', 
        title: 'Easy Swedish Meatballs', 
        necessities: 'Required: Pork or Beef, Pan, Milk.',
        description: 'You know what this is.',
        ingredients: ['pork', 'pan', 'beef', 'milk'], 
        time: 20,
     },   
     { url: 'https://www.food.com/recipe/dill-pickle-ham-pinwheels-ham-rollups-64399', 
        image: 'images/pickle-pinwheel.jpg', 
        title: 'Pickle Pinwheel', 
        necessities: 'Required: Tortillas, Pickles, Cream Cheese.',
        description: 'Tortillas and pickles necessary for this highly sharable dish.',
        ingredients: ['ham', 'tortillas', 'pickles', 'cream-chease'], 
        time: 20,
     },   
]

// Get filter buttons and recipe list container
const filterButtons = document.querySelectorAll('.filter-btn');
const timeFilterButtons = document.querySelectorAll('.time-btn');
const recipesList = document.getElementById('recipes-list');
const utensilFilterButtons = document.querySelectorAll('.utensil-filter');
const timeSlider = document.getElementById("time-slider");
const timeValue = document.getElementById("time-value");

let activeFilters = [];
let excludedUtensils = [];
let maxCookingTime = parseInt(timeSlider.value); // Default value from slider

// Update displayed time when slider changes
timeSlider.addEventListener("input", () => {
    maxCookingTime = parseInt(timeSlider.value);
    timeValue.textContent = `${maxCookingTime} min`;
    updateRecipeList();
});

// Function to update the recipe list based on selected filters
function updateRecipeList() {
    const ingredientFilters = Array.from(
        document.querySelectorAll('.filter-btn.active:not(.utensil-filter):not(.time-slider)')
    ).map(button => button.dataset.ingredient);

    console.log('Active Ingredients:', ingredientFilters);
    console.log('Excluded Utensils:', excludedUtensils);
    console.log('Max Cooking Time:', maxCookingTime);

    // Filter recipes
    const filteredRecipes = recipes.filter(recipe => {
        const matchesIngredients =
            ingredientFilters.length === 0 || // If no ingredients are selected, include all recipes
            ingredientFilters.some(filter => recipe.ingredients.includes(filter));

        const excludesUtensils = excludedUtensils.every(utensil =>
            !recipe.ingredients.includes(utensil)
        );
        const matchesTime = recipe.time <= maxCookingTime;

        console.log(
            `Recipe: ${recipe.title}, Matches Ingredients: ${matchesIngredients}, Excludes Utensils: ${excludesUtensils}, Matches Time: ${matchesTime}`
        );

        return matchesIngredients && excludesUtensils && matchesTime;
    });

    displayRecipes(filteredRecipes);
}

function buttonCloseStart() {
    var x = document.getElementById("ingredient-box");
    var y = document.getElementById("utensil-box");
    var z = document.getElementById("time-box");
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
}

function ingredientFunction() {
    var x = document.getElementById("ingredient-box");
    var y = document.getElementById("utensil-box");
    var z = document.getElementById("time-box");
    if (x.style.display === "none" && y.style.display === "none" && z.style.display === "none") {
        x.style.display = "block";
      } else if (y.style.display === "block" || z.style.display === "block") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      } else if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "none";
      }
  }

function utensilFunction() {
    var x = document.getElementById("ingredient-box");
    var y = document.getElementById("utensil-box");
    var z = document.getElementById("time-box");
    if (x.style.display === "none" && y.style.display === "none" && z.style.display === "none") {
      y.style.display = "block";
    } else if (x.style.display === "block" || z.style.display === "block") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
    } else if (y.style.display === "block") {
        y.style.display = "none";
      } else {
      y.style.display = "none";
    }
  }

  function timeFunction() {
    var x = document.getElementById("ingredient-box");
    var y = document.getElementById("utensil-box");
    var z = document.getElementById("time-box");
    if (x.style.display === "none" && y.style.display === "none" && z.style.display === "none") {
      z.style.display = "block";
    } else if (x.style.display === "block"  || y.style.display === "block") {
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
    } else if (y.style.display === "block") {
        z.style.display = "none";
      } else {
      z.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const bottomBar = document.querySelector('.bottom-bar');
    const categoryButtons = document.querySelectorAll('.selector-btn');
    let activeButton = null; // Track the currently selected button

    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Reset previous states (remove effects from all buttons)
            bottomBar.classList.remove('rotate-left', 'rotate-right', 'translate-up');
            categoryButtons.forEach(btn => btn.classList.remove('floating'));

            // If the same button is clicked again, deselect it (bring it down)
            if (activeButton === button) {
                activeButton = null;
                return;
            }

            // Animate bowl rotation or movement
            if (category === 'ingredients') {
                bottomBar.classList.add('rotate-right');
            } else if (category === 'utensils') {
                bottomBar.classList.add('translate-up');
            } else if (category === 'time') {
                bottomBar.classList.add('rotate-left');
            }

            // Allow button to move independently
            setTimeout(() => {
                button.classList.add('floating');
            }, 200); // Small delay for realism

            activeButton = button;
        });
    });
});


// Function to display the recipes with thumbnails
function displayRecipes(recipes) {
    const recipesList = document.getElementById('recipes-list');
    recipesList.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesList.innerHTML = '<p><br>Sorry, no recipes found, try changing the ingredients, utensils, or cooking time :).</p>';
        return;
    }
    
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        // Create a clickable link (wrapper for image and title)
        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.url;
        recipeLink.classList.add('recipe-link');
        recipeLink.target = "_blank"; // Open in new tab

        // Create the thumbnail image
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image || 'images/default.jpg'; // Use default if missing
        recipeImage.alt = recipe.title;
        recipeImage.classList.add('recipe-thumbnail');

        // Create the recipe title
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeTitle.classList.add('recipe-title');

        // Append the image and title inside the link
        recipeLink.appendChild(recipeImage);
        recipeLink.appendChild(recipeTitle);

        // Create an info container to hold the author & components
        const recipeInfo = document.createElement('div');
        recipeInfo.classList.add('recipe-info');

        // Create the author label
        const recipeAuthor = document.createElement('span');
        recipeAuthor.textContent = `${recipe.author}`;
        recipeAuthor.classList.add('recipe-author');

        // Create the components box
        const recipeComponents = document.createElement('div');
        recipeComponents.classList.add('recipe-components');
        recipeComponents.textContent = `${recipe.necessities.join(', ')}`;

        // Append author & components to info container
        recipeInfo.appendChild(recipeAuthor);
        recipeInfo.appendChild(recipeComponents);

        // Append everything to the recipe box
        recipeItem.appendChild(recipeLink);
        recipeItem.appendChild(recipeInfo);

        // Add the recipe box to the list
        recipesList.appendChild(recipeItem);
    });
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        updateRecipeList();
    });
});

// Handle time filter button clicks
timeFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTime = parseInt(button.dataset.ingredient);

        // Reset all time filter buttons
        timeFilterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Activate all buttons for times <= selectedTime
        timeFilterButtons.forEach(btn => {
            if (parseInt(btn.dataset.ingredient) <= selectedTime) {
                btn.classList.add('active');
            }
        });

        maxCookingTime = selectedTime; // Update max cooking time
        updateRecipeList();
    }); 
});

// Handle utensil filter button clicks
utensilFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const utensil = button.dataset.utensil;

        if (excludedUtensils.includes(utensil)) {
            // Remove utensil from exclusion
            excludedUtensils = excludedUtensils.filter(item => item !== utensil);
            button.classList.remove('active');
        } else {
            // Add utensil to exclusion
            excludedUtensils.push(utensil);
            button.classList.add('active');
        }

        updateRecipeList();
    });
});

// Initial load with all recipes displayed
updateRecipeList();
