/*
let ask = prompt("Enter a name");
ask = [];

console.log(ask);

 if(ask === "") 
 {
 firstName = ("No name found")
} else 
{ 
 ask;
 document.write(`<p> The names are: <br> ${ask[0]} <br> ${ask[1]}<br>  ${ask[2]} <br> ${ask[3]} <br> ${ask[4]}</p>`);
}; 
 
for (i = 0; i < 5; i++) {
ask.push(prompt("Enter a name"));
};
*/

// correction
// Correction 1 sans bonus
let firstnames = [];
let firstname;

// Tant que la longueur du tableau est inférieur à 5, on fait la demande au user
while (firstnames.length < 5) {
firstname = prompt("Entrez un prénom");

if (firstname) {
// Vérifie si l'utilisateur a entré quelque chose
firstnames.push(firstname);
} else {
break; // Sort de la boucle si l'utilisateur n'a rien entré
}
}
if (firstnames.length > 0) {
document.write("Voici la liste des prénoms: " + firstnames.join(" , "));
} else {
document.write("Il n'y a rien dans la liste de prénoms");
}
/******
second version with bonus
*****/

/*
// Correction 2 avec bonus
// let firstnames = [];
// let firstname;

// Tant que la longueur du tableau est inférieur à 5, on fait la demande au user
// while (firstnames.length < 5) {
// firstname = prompt("Entrez un prénom");

// Vérifie si l'utilisateur a entré quelque chose et si c'est pas un nombre
// if (firstname && isNaN(firstname)) {
// firstnames.push(firstname);
// // Si le user entre autre chose, on renvoit un message
// } else if (firstname !== null) {
// alert("Entrez un prénom valide et pas un nombre");
// } else {
// break; // Sort de la boucle si l'utilisateur n'a rien entré
// }
// }
// if (firstnames.length > 0) {
// document.write("Voici la liste des prénoms: " + firstnames.join(" , "));
// } else {
// document.write("Il n'y a rien dans la liste de prénoms");
// }
*/
