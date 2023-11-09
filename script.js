var EdamamAPIKey = "df04c0c3e6mshe64ccb6aa49f000p1ae751jsn3e242baa2eed"
var recipeInput = document.querySelector(".recipe-input");
var searchButton = document.querySelector(".search");

var getRecipeData = function () {
    var recipeName = recipeInput.value.trim(); //Gets entered recipe name and trims any whitespace
    var EdamamURL = "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2" + EdamamAPIKey; //need to find a way to make API work

    fetch(EdamamAPIKey)
    .then(function(response){
        return response.json();

    })
    .then(function (data){
        console.log(data)
    })
} 