// Array of recipes with URLs and ingredients
const recipes = [
    { url: 'https://www.youtube.com/watch?v=MbdQzjaevXQ&list=PLbS0HkS8Xsoq1j4kiZFLP9w1e3pQADR3g&index=3', ingredients: ['pot', 'rice', 'beef', '10mins'] },
    { url: 'https://example.com/recipe2', image: 'images/chicken and vegetables.jpg', ingredients: ['beef', 'vegetables'] },
    { url: 'https://example.com/recipe3', ingredients: ['chicken', 'vegetables'] },
    { url: 'https://example.com/recipe4', ingredients: ['eggs', 'vegetables'] },
    { url: 'https://example.com/recipe5', ingredients: ['beef', 'cheese'] },
];

// Get filter buttons and recipe list container
const filterButtons = document.querySelectorAll('.filter-btn');
const recipesList = document.getElementById('recipes-list');

// Function to update the recipe list based on selected filters
function updateRecipeList() {
    const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active')).map(button => button.dataset.ingredient);
    
    const filteredRecipes = recipes.filter(recipe => 
        activeFilters.every(filter => recipe.ingredients.includes(filter))
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

// Initial load with all recipes displayed
updateRecipeList();
