const BASE_URL = "http://localhost:3000/"
const RECIPES_URL = `${BASE_URL}api/v1/recipes`
const REVIEWS_URL = `${BASE_URL}api/v1/reviews`
const CUISINES_URL = `${BASE_URL}api/v1/cuisines`
const INGREDIENTS_URL = `${BASE_URL}api/v1/ingredients`
const USERS_URL = `${BASE_URL}api/v1/users`
// const carousel = document.querySelector('.carousel')
const h1 = document.querySelector('.h1-header')
const displayCards = document.querySelector('.display-cards')
// const jumboHeader = document.querySelector('.jumbo-header')
// const clear = document.querySelector('#clear-page')

const getRecipes = () => {
    fetch(RECIPES_URL)
    .then(res => res.json())
    .then(recipesData => {
        recipesData.forEach(recipe => {
            renderRecipe(recipe)
            // console.log(recipe['reviews'])
        });

    })
}

// const getCuisines = () => {
//     fetch(CUISINES_URL)
//     .then(res => res.json())
//     .then(cuisinesData => {
//     cuisinesData.forEach(cuisine => {
//         renderCuisine(cuisine)
//     });
// })
// }

// const getReviews = () => {
//     fetch(REVIEWS_URL)
//     .then(res => res.json())
//     .then(reviewsData => {
//     reviewsData.forEach(review => {
//         renderReview(review)
//     });
// })
// }

const renderRecipe = (recipe) => {
    const recipeLink = document.querySelector('.recipe-link')
    // const navbar = document.querySelector('#navbar-header-carousel')

    // recipeLink.addEventListener('click', () => {
        // clear.innerHTML = ''
        console.log(recipe)
        h1.innerText = 'Recipes'
        // const jumboHeader = document.querySelector('.jumbo-header')
        // jumboHeader.innerText = 'Recipes'

        const card = document.createElement('div')
        
        // const divRow = document.createElement('div')
        // divRow.className = 'row'

        const divCard = document.createElement('div')
        divCard.classList.add('card', 'col-sm')
        divCard.style = 'width: 50%'

        const cardImg = document.createElement('img')
        cardImg.src = `${recipe.image_url}`
        cardImg.className = 'card-img-top'
        cardImg.alt = 'food'

        const divCardBody = document.createElement('div')
        divCardBody.className = 'card-body'

        const cardH5 = document.createElement('h5')
        cardH5.className = 'card-title'
        cardH5.innerText = `${recipe.name}`

        const cardP = document.createElement('p')
        cardP.className = 'card-text'
        cardP.innerText = `${recipe.instructions}`

        const reviewBtn = document.createElement('button')
        reviewBtn.classList.add('btn', 'btn-primary')
        reviewBtn.innerText = 'Review'
        const form = document.createElement('form')
        const formText = document.createElement('input')
        const formNumber = document.createElement('input')
        formNumber.type= 'number'
        formText.type = 'text'
        form
        reviewBtn.addEventListener('click', () => {
            console.log('review')
            


        })
        displayCards.append(divCard)
        divCard.append(cardImg, divCardBody)
        divCardBody.append(cardH5,cardP,reviewBtn, form)
        form.append(formText, formNumber, revie)
        
    // })
}

// const setupPersonForm = () => {
//     const personForm = document.getElementById('person-form')
//     // console.log(personForm)
//     personForm.addEventListener('submit', (event) => {
//         event.preventDefault()
        
//         const newPerson = { 
//             name: event.target[0].value,
//             pronouns: event.target[1].value,
//             'alum?': event.target[2].value === 'true' ? true : false,
//             'instructor?': event.target[3].value === 'true' ? true : false,
//             github: event.target[4].value,
//             profilePicture: event.target[5].value
//         }
    
//         fetch("http://localhost:3000/people", {
//             method: "POST",
//             headers: {
//               "content-type": "application/json",
//               "accept": "application/json",
//             },
//             body: JSON.stringify(newPerson)
//           })
//           .then(res => res.json())
//           .then(newPerson => renderPerson(newPerson))
        
//     })
// }
const renderReview = (review) => {

    const reviewsLink = document.querySelector('.reviews-link')

    reviewsLink.addEventListener('click', () => {
        // displayCards.innerHTML = ''
        console.log("carousel")
        h1.innerText = 'Reviews'
        const reviewLi = document.createElement('blockquote')
        reviewLi.className = 'lead'
        reviewLi.innerText = recipe.review.comment
        displayCards.append(reviewLi)
    })
}

const renderCuisine = (cuisine) => {
    const cuisineLink = document.querySelector('.cuisine-link')
    cuisineLink.addEventListener('click', () => {
        h1.innerText = 'Recipes'

    })
}

getRecipes()
// getReviews()
// getCuisines()