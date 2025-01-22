window.onload = function() {
    buttonCloseStart(); 
  }
  
// Array of recipes with URLs and ingredients
const recipes = [
    { 
        url: 'https://www.youtube.com/watch?v=MbdQzjaevXQ&list=PLbS0HkS8Xsoq1j4kiZFLP9w1e3pQADR3g&index=3', 
        image: 'images/plov-student-edition.jpg', 
        title: 'Plov Student Edition',
        description: 'Rice, meat, and vegetables all steamed in one pot. Nice and easy.',
        ingredients: ['pot', 'pan', 'wok', 'oven', 'microwave', 'rice', 'beef', 'carrots', 'garlic', 'onions'], 
        time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=-heI0TqcxFo', 
        image: 'images/18th-ct-cheese-soup.jpg', 
        title: '18th Century Cheese Soup',
        description: 'A wholsome historical recipe using just bread and cheese.',
        ingredients: ['cheese', 'bread', 'pot', 'pan'], 
        time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=9X8VJvoo6y0', 
        image: 'images/7-ways-instantnoodles.jpg', 
        title: '7 Ways to Cook Instant Noodles',
        description: '7 ways to cook instant noodles, contains some comedic exaggeration.',
        ingredients: ['instant noodels', 'pan'], 
        time: 5,
    },
    { url: 'https://www.allrecipes.com/recipe/138924/dorm-room-cheesy-tuna-and-noodles/', 
       image: 'images/tuna-instantnoodles.jpg',
       title: 'Tuna Noodles',
       description: 'Just a microwave needed to bring a twist to instant noodles.',
       ingredients: ['instantnoodles', 'tuna', 'microwave'], 
       time: 5,
    },
    { url: 'https://www.youtube.com/watch?v=hDybFLoOcGg', 
       image: 'images/stragonoff.jpg', 
       title: 'Stragonoff',
       description: 'Russian sauteed beef with mushrooms, cheese, and pickles.',
       ingredients: ['beef', 'cheese', 'bread', 'potatos', 'pickles', 'onions', 'mushrooms', 'pan', 'pot'], 
       time: 20,
    },
    { 
        url: 'https://www.townsends.us/blogs/blog/simple-apple-pudding', 
        image: 'images/simple-apple-pudding.jpg', 
        title: 'Simple Apple Pudding',
        description: 'Just an apple and some flour or dough needed.',
        ingredients: ['apple', 'flour', 'oven'], 
        time: 20,
    },
    { url: 'https://www.justlikegranny.com/home/raggmunk-swedish-potato-pancakes', 
        image: 'images/raggmunk.jpg', 
        title: 'Raggmunk',
        description: 'Swedish potato pancakes, bacon, eggs, and jam optional.',
        ingredients: ['potatoes', 'bacon', 'pan', 'oven', 'microwave'], 
        time: 25,
    },
    { url: 'https://flolum.com/yangzhou-fried-rice/', 
        image: 'images/yangzhou-fried-rice.jpg', 
        title: 'Yangzhou Fried Rice',
        description: 'Quick and easy fried rice, wok or pan, your choice.',
        ingredients: ['rice', 'eggs', 'pan', 'wok', 'rice', 'ham', 'soysauce'], 
        time: 15,
    },
    { url: 'https://www.youtube.com/watchttps://www.marionskitchen.com/cantonese-beef-chow-fun-noodles/h?v=iH_K-VbGvVI', 
       image: 'images/Cantonese-Beef-Fried-Noodles.jpg',
       title: 'Cantonese Styled Fried Noodles',
       description: 'A cantonese staple, brown perfection.',
       ingredients: ['rice noodles', 'beef', 'pan', 'wok', 'soysauce', 'oystersauce'], 
       time: 25,
    },
    { url: 'https://www.youtube.com/watch?v=2s7zK07dODw', 
       image: 'images/bowl-of-fragrance.jpg', 
       title: 'A Bowl of Fragrance', 
       description: 'This Chinese magic does not even have a generally accepted English name, that is how local it is. Make it.',
       ingredients: ['pork', 'pan', 'chillies', 'woodears', 'wok', 'pan', 'garlic'], 
       time: 20,
    },
    { url: 'https://fun-chinese-cooking.blogspot.com/2014/11/hunan-style-stir-fried-pork-slices-with.html', 
        image: 'images/hunan-fried-pork.jpg', 
        title: 'Hunan Sitr Fried Pork', 
        description: 'Pork, Jallepenos, garlic necessary.',
        ingredients: ['pork', 'pan', 'chillies', 'wok', 'pan', 'garlic', 'soysauce'], 
        time: 20,
     },    
]

// Get filter buttons and recipe list container
const filterButtons = document.querySelectorAll('.filter-btn');
const timeFilterButtons = document.querySelectorAll('.time-btn');
const recipesList = document.getElementById('recipes-list');
const utensilFilterButtons = document.querySelectorAll('.utensil-filter');

let activeFilters = [];
let excludedUtensils = [];
let maxCookingTime = Infinity;

// Function to update the recipe list based on selected filters
function updateRecipeList() {
    const ingredientFilters = Array.from(
        document.querySelectorAll('.filter-btn.active:not(.utensil-filter):not(.time-btn)')
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

// Function to display the recipes with thumbnails
function displayRecipes(recipes) {
    recipesList.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesList.innerHTML = '<p><br>Sorry, no recipes found, try changing the ingredients, utensils, or cooking time :).</p>';
        return;
    }
    
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        //Create an image element for the thumbnail
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = 'Recipe Thumbnail';
        recipeImage.classList.add('recipe-thumbnail');

        //Create an image element for the thumbnail
        const recipeDetails = document.createElement('div');
        recipeDetails.classList.add('recipe-details')

        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeTitle.classList.add('recipe-title');

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeDescription.classList.add('recipe-description');

        // Create a link to the recipe
        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.url;
        recipeLink.textContent = `View Recipe`;
        recipeLink.classList.add('recipe-link');

        // Append details and link to the details container
        recipeDetails.appendChild(recipeTitle);
        recipeDetails.appendChild(recipeDescription);
        recipeDetails.appendChild(recipeLink);
        
        // Append image and link to the recipe item
        recipeItem.appendChild(recipeImage);
        //recipeItem.appendChild(recipeLink);
        recipeItem.appendChild(recipeDetails);
        
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
