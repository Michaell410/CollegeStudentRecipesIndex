// Array of recipes with URLs and ingredients
const recipes = [
    { url: 'https://www.food.com/recipe/cheesy-scrambled-eggs-44656', ingredients: ['eggs', 'cheese'] },
    { url: 'https://example.com/recipe2', ingredients: ['beef', 'vegetables'] },
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

// Function to display the recipes
function displayRecipes(recipes) {
    recipesList.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesList.innerHTML = '<p>No recipes found with the selected ingredients.</p>';
        return;
    }
    
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.url;
        recipeLink.textContent = `Recipe: ${recipe.url}`;
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
