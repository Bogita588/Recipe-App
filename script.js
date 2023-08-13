const searchBtn = document.getElementById('search-btn');
const mealList =document.getElementById('meal');
const mealDetailsContent =document.querySelector('.meal-details-content');
const recipeCloseBtn =document.getElementById('recipe-close-btn');


searchBtn.addEventListener('click', getMealList);

function getMealList(){
    let searchInputTxt = document.getElementById
    ('search-input').ariaValueMax.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let =html ="";
        if(data.meals){
            data.meal.forEach(meal => {
                html += ``
            });
        }
    })
}










