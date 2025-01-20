// Array of recipes with URLs and ingredients
const recipes = [
    { url: 'https://www.youtube.com/watch?v=MbdQzjaevXQ&list=PLbS0HkS8Xsoq1j4kiZFLP9w1e3pQADR3g&index=3', ingredients: ['pot', 'rice', 'beef'], time: 5},
    { url: 'https://example.com/recipe2', image: 'images/chicken and vegetables.jpg', ingredients: ['beef', 'vegetables'], time: 10},
    { url: 'https://example.com/recipe3', ingredients: ['chicken', 'vegetables'], time: 15},
    { url: 'https://example.com/recipe4', ingredients: ['eggs', 'vegetables'], time: 20},
    { url: 'https://example.com/recipe5', ingredients: ['beef', 'cheese'], time: 15},
]

// Get filter buttons and recipe list container
const filterButtons = document.querySelectorAll('.filter-btn');
const timeFilterButtons = document.querySelectorAll('.time-filters .filter-btn');
const recipesList = document.getElementById('recipes-list');

let activeFilters = [];
let maxCookingTime = Infinity;

// Function to update the recipe list based on selected filters
function updateRecipeList() {
    const ingredientFilters = Array.from(document.querySelectorAll('.filter-btn.active')).map(button => button.dataset.ingredient);
    
    const filteredRecipes = recipes.filter(recipe => 
        ingredientFilters.every(filter => recipe.ingredients.includes(filter)) &&
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
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = 'Recipe Thumbnail';
        recipeImage.classList.add('recipe-thumbnail');


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


// Initial load with all recipes displayed
updateRecipeList();
