var EdamamAPIKey = "df04c0c3e6mshe64ccb6aa49f000p1ae751jsn3e242baa2eed"
var recipeInput = document.querySelector(".recipe-input");
var searchButton = document.querySelector(".search");

const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=chicken';
const options = {
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': EdamamAPIKey,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

var getRecipeData = function () {
    var recipeName = recipeInput.value.trim(); //Gets entered recipe name and trims any whitespace
   
    fetch(url,options)
    .then(function(response){
        return response.json();

    })
    .then(function (data){
        console.log(data)
    })
} 

var getYoutubeData = function() {
    var youtubeURL = ""
    
    fetch(youtubeURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}
searchButton.addEventListener("click", getRecipeData);