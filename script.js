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
var EdamamAPIKey = "df04c0c3e6mshe64ccb6aa49f000p1ae751jsn3e242baa2eed"
var recipeInput = document.getElementById("recipe-search");
var searchButton = document.getElementById("submitBtn");
console.log("hi")

const options = {
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': EdamamAPIKey,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
}; // get input to display on UI

var getRecipeData = function (event) {
    var recipeName = recipeInput.value.trim(); //Gets entered recipe name and trims any whitespace
    console.log(recipeName)
    const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&field%5B0%5D=uri&q='+recipeName+'&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies';
   event.preventDefault()
    fetch(url,options)
    .then(function(response){
        return response.json();

    })
    .then(function (data){
        var {hits} = data //go to hits line- destructuring 
        console.log(hits)
for (var i=0; i<hits.length; i++){
    console.log(hits[i])
    var card = document.createElement("div")
    card.setAttribute("class", "card")
    var image = document.createElement("img");
    image.setAttribute("src", hits[i].recipe.images.SMALL.url)
    card.append(image)
    var aTag = document.createElement("a");
    aTag.setAttribute("href", hits[i]._links.self.href);
    aTag.setAttribute("target", "_blank")
    var title = document.createElement("h3").textContent= " "+ hits[i].recipe.label + " "
    aTag.append(title)
    card.append(aTag)
    document.querySelector(".results").append(card)
}
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