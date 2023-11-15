// const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2/%7Bid%7D?type=public&field%5B0%5D=uri&beta=true';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Accept-Language': 'en',
// 		'X-RapidAPI-Key': 'df04c0c3e6mshe64ccb6aa49f000p1ae751jsn3e242baa2eed',
// 		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
var EdamamAPIKey = "df04c0c3e6mshe64ccb6aa49f000p1ae751jsn3e242baa2eed";
var SerpApiKey = "69a9a9cad5efc659aa413039b114f385fedcaef4e88b4c9b3a21016db0a57e49";
var recipeInput = document.getElementById("recipe-search");
var searchButton = document.getElementById("submitBtn");
var filterIngredientInput = document.getElementById("filter-ingredient");
var filterMealSelect = document.getElementById("filter-meal");
var filterButton = document.getElementById("filterBtn");
console.log("hi");

const options = {
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': EdamamAPIKey,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
}; // get input to display on UI



function getSelectedMealFilter() {
    return filterMealSelect.value;
}

function getIngredientFilter() {
    return filterIngredientInput.value.trim();
}

function getRecipeData(event) {
    event.preventDefault();

    var recipeName = recipeInput.value.trim(); //Gets entered recipe name and trims any whitespace
    var ingredientFilter = getIngredientFilter();
    var selectedMeal = getSelectedMealFilter();


    console.log(recipeName);
    console.log(selectedMeal);
    console.log(ingredientFilter);

    var url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=${recipeName}&beta=true`;

    if (selectedMeal) {
        url += `&mealType=${selectedMeal}`;
    }

    if (ingredientFilter) {
        url += `&ingredients=${ingredientFilter}`;
    }
    
    

    var resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = '';

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var { hits } = data;
            console.log(hits)
            for (var i = 0; i <hits.length; i++) {
                console.log(hits[i])

                var card = document.createElement("div");
                card.setAttribute("class", "card");

                var image = document.createElement("img");
                image.setAttribute("src", hits[i].recipe.images.SMALL.url);
                card.appendChild(image);

                var title = document.createElement("h3");
                title.setAttribute("class", "card-h3");
                title.textContent = " " + hits[i].recipe.label + " ";
                card.appendChild(title);
                
                var link = document.createElement("a");
                link.setAttribute("class", "card-a");
                link.setAttribute("href", hits[i].recipe.url);
                link.setAttribute("target", "_blank");
                link.textContent = "View Recipe";
                card.appendChild(link);
                
                var serpApiLink = document.createElement("a");
                var recipeNameForSearch = encodeURIComponent(hits[i].recipe.label);
                serpApiLink.setAttribute("href", `https://serpapi.com/search.html?engine=youtube&search_query=${recipeNameForSearch}&api_key=${SerpApiKey}`);
                serpApiLink.setAttribute("target", "_blank");
                serpApiLink.setAttribute("class", "card-y");
                serpApiLink.textContent = "Search on YouTube";
                
                card.appendChild(serpApiLink);

                resultsContainer.appendChild(card);
}
})
};



// const { getJson } = require("serpapi");
// getJson({
//   engine: "youtube",
//   search_query: recipeName,
//   api_key: "69a9a9cad5efc659aa413039b114f385fedcaef4e88b4c9b3a21016db0a57e49"
// }, (json) => {
//   console.log(json["recipeName"]);
// });
// var getYoutubeData = function(event) {
//     var youtubeUrl = `https://serpapi.com/search.json?engine=youtube&search_query=${recipeName}`
//     fetch(youtubeUrl,getJson)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }
// getYoutubeData();

searchButton.addEventListener("click", getRecipeData);
filterButton.addEventListener("click", getRecipeData);

