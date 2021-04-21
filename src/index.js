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
    const navbarCarouselDiv = document.querySelector('#navbar-header-carousel')

    recipeLink.addEventListener('click', () => {
        console.log('Clicky')
        navbarCarouselDiv.innerHTML = ''
        const recipeCards = document.getElementById('recipe-cards')
        const card = document.createElement('div')
        card.innerHTML = 
        `<div class="card" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      recipeCards.appendChild(card)
    })
}


getRecipes()