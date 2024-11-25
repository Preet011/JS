// Déclaration de variables en haut de script

let weather = false;
let number = 300;
let number2 = 20;

/*********************************************/
// STRUCTURE DE BASE D'UNE CONDITION

if (true) {
	// instruction si c'est vrai
}
/*********************************************/

// if (weather) {
// 	console.log("Oui cette variable renvoie vraie");
// }

// if (weather) {
// 	console.log("Oui cette variable renvoie vraie");
// } else {
// 	console.log("Et non elle est bien fausse !");
// }

if (number > 80) {
	console.log("Oui c'est bien supérieur à 80");
} else if (number > 150) {
	console.log("Oui c'est bien supérieur à 150");
} else if (number < 30) {
	console.log("Oui c'est inférieur à 30");
} else {
	console.log("Pas de correspondance trouvé ! ");
}
