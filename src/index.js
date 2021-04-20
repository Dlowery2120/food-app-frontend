// const BASE_URL = "http://127.0.0.1:3000/api/v1/recipes"
// const RECIPES_URL = `${BASE_URL}api/v1/recipes`
// const REVIEWS_URL = `${BASE_URL}api/v1/reviews`
// const CUISINES_URL = `${BASE_URL}api/v1/cuisines`
// const INGREDIENTS_URL = `${BASE_URL}api/v1/ingredients`
// const USERS_URL = `${BASE_URL}api/v1/users`


const getRecipes = () => {
    fetch("http://127.0.0.1:3000/api/v1/recipes")
    .then(res => res.json())
    .then(recipesData => {
    recipesData.forEach(recipe => {
        renderRecipe(recipe)
        // console.log(recipe)
    });
})
}

const renderRecipe = (recipe) => {
    const recipeLink = document.querySelector('.recipe-link')
    
    recipeLink.addEventListener('click', () => {
        console.log('Clicky')
    })
}


getRecipes()