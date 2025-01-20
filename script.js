// Array of recipes with URLs and ingredients
const recipes = [
    { url: 'https://www.youtube.com/watch?v=MbdQzjaevXQ&list=PLbS0HkS8Xsoq1j4kiZFLP9w1e3pQADR3g&index=3', image: 'images/plov-student-edition.jpg', ingredients: ['pot', 'pan', 'rice', 'beef', 'carrots', 'garlic', 'onions'], time: 25},
    { url: 'https://www.youtube.com/watch?v=-heI0TqcxFo', image: 'images/18th-ct-cheese-soup.jpg', ingredients: ['cheese', 'bread', 'pot'], time: 25},
    { url: 'https://www.youtube.com/watch?v=9X8VJvoo6y0', image: 'images/7-ways-instantnoodles.jpg', ingredients: ['instant noodels', 'pan'], time: 5},
    { url: 'https://www.allrecipes.com/recipe/138924/dorm-room-cheesy-tuna-and-noodles/', image: 'images/tuna-instantnoodles.jpg', ingredients: ['instantnoodles', 'tuna', 'microwave'], time: 5},
    { url: 'https://www.youtube.com/watch?v=hDybFLoOcGg', image: 'images/stragonoff.jpg', ingredients: ['beef', 'cheese', 'bread', 'potatos', 'pickles', 'onions', 'mushrooms', 'pan'], time: 20},
]

// Get filter buttons and recipe list container
const filterButtons = document.querySelectorAll('.filter-btn');
const timeFilterButtons = document.querySelectorAll('.time-filters .filter-btn');
const recipesList = document.getElementById('recipes-list');
const utensilFilterButtons = document.querySelectorAll('.utensil-filter');

let activeFilters = [];
let excludedUtensils = [];
let maxCookingTime = Infinity;

// Function to update the recipe list based on selected filters
function updateRecipeList() {
    const ingredientFilters = Array.from(document.querySelectorAll('.filter-btn.active:not(.utensil-filter)')).map(button => button.dataset.ingredient);
    
    const filteredRecipes = recipes.filter(recipe => 
        ingredientFilters.every(filter => recipe.ingredients.includes(filter)) &&
        excludedUtensils.every(utensil => !recipe.ingredients.includes(utensil)) &&
        recipe.time <= maxCookingTime
    );
    
    displayRecipes(filteredRecipes);
}

// Function to display the recipes with thumbnails
function displayRecipes(recipes) {
    recipesList.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesList.innerHTML = '<p>Sorry, no recipes found, try changing the ingredients, utensils, or cooking time :).</p>';
        return;
    }
    
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        //Create an image element for the thumbnail
        const recipeImage = document.createElement('a');
        recipeText.src = recipe.image;
        recipeText.alt = 'Recipe Thumbnail';
        recipeText.classList.add('recipe-thumbnail');

        //Create an image element for the thumbnail
        const recipeTitle = document.createElement('img');

        // Create a link to the recipe
        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.url;
        recipeLink.textContent = `View Recipe`;
        recipeLink.classList.add('recipe-link');
        
        // Append image and link to the recipe item
        recipeItem.appendChild(recipeImage);
        recipeItem.appendChild(recipeLink);
        
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
        const selectedTime = parseInt(button.dataset.time);

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

// Handle utensil filter button clicks (for exclusion)
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
