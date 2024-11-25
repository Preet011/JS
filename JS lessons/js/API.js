const results = document.querySelector("#jokes-results");
const btn = document.querySelector("#jokes-btn");

function getJokes() {
// URL dans laquelle on va aller récupérer des données
const URL = "https://api.chucknorris.io/jokes/random";

// Méthode qui nous permet de faire une requête HTTP GET auprès de l'API
fetch(URL)
// Vérifie la réponse et si oui on la convertir en JSON pour qu'on puisse l'utiliser
.then((response) => response.json())
// Une fois convertie on récupère la donnée utilisable pour affichage
.then(
(data) =>
// console.log(data));
// console.log(`Réponse finale: ${data.value}`),
// console.log(`Réponse finale: ${data.icon_url}`)
(results.innerHTML = `<p>${data.value}</p>
                                    <img src=${data.icon_url} alt= "tête de chuck />`),
)
// Gestion d'erreur lors de la requête
.catch((err) => {
console.log(`Erreur de la récupération des données: ${err}`);
});
}

// getJokes();

// Ajout d'un gestionnaire d'évènement au click sur le bouton
btn.addEventListener("click", getJokes);

