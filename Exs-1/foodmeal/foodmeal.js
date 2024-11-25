/*
let results =  document.querySelector("#results");
let input = document.querySelector("#searchInput");


searchInput.addEventListener("input", function (e) {
input = e.target.value;
console.log(input);
console.log(e);
 food();

});

const food = () => {
    const URL =` https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
    fetch(URL)

.then((response) => response.json())

.then((data) => {
    console.log(data);

 
    for(i= 0, i < data.meals.length; i++;) {

  results.innerHTML = `${data.meals[i].strMeal}`
    };
  
   ; 
    
})

    .catch((err) => {
        console.log(`${err}`);
        });
    }
        */
       // correction

       const searchInput = document.getElementById("searchInput");
 const results = document.getElementById("results");
   
let searchRecipe = "";

searchInput.addEventListener("input", (e) => {
searchRecipe = e.target.value;
// console.log(searchRecipe);
searchFood();
});

function searchFood() {
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchRecipe}`)
.then((response) => response.json())
.then((data) => {
console.log(data.meals);
if (data.meals == null) {
results.innerHTML = `<span class="noResult">Aucun résultat</span>`;
}

results.innerHTML = "";

for (let i = 0; i < data.meals.length; ++i) {
results.innerHTML += `
<div class="searchContainer">
<h2>${data.meals[i].strMeal}</h2>
<img src='${data.meals[i].strMealThumb}' /></br>
</div>
`;
}
})
.catch((err) => {
console.log(`Erreur lors de la récupération des données: ${err}`);
});
}

/* MAP() method */
// results.innerHTML = data.meals
// .map(
// (meal) =>
// `
// <div class="searchContainer">
// <h2>${meal.strMeal}</h2>
// <img src='${meal.strMealThumb}' /></br>
// </div>
// `,
// )
// .join("");
// }
// }