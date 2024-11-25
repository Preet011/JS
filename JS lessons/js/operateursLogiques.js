let weather = true;
let number = 90;
let number2 = 20;
let A, B, C, D;

/* OPÉRATEURS && (ET) LES EXPRESSIONS DOIVENT ÊTRE VRAIES POUR QUE TOUTE LA CONDITION SOIT VRAIE */
// if (number > 80 && number > 150) {
// 	console.log("Oui c'est bien supérieur à 80 et à 150");
// } else if (number < 30) {
// 	console.log("Oui c'est inférieur à 30");
// } else {
// 	console.log("Pas de correspondance trouvé ! ");
// }

if (A && B) {
	// => si A est vraie ET B vraie => VRAIE
	// => si A est faux ET B est faux => FAUX
	// => si A est faux ET B est vrai => FAUX
	// => sI A est vrai ET B est faux => FAUX
}

/* OPÉRATEURS || (OU) UNE DE DEUX EXPRESSION DOIT ÊTRE VRAIE POUR QUE TOUTE LA CONDITION SOIT VRAIE */
if (number > 80 || number > 150) {
	console.log("Oui c'est bien supérieur à 80 et à 150");
} else if (number < 30) {
	console.log("Oui c'est inférieur à 30");
} else {
	console.log("Pas de correspondance trouvé ! ");
}

if (C || D) {
	// => si C est vrai OU D vrai => VRAI
	// => si C est faux OU D est faux => FAUX
	// => si C est faux OU D est vrai => VRAI
	// => si C est vrai OU D est faux => VRAI
}

// vérification si la variable est fausse
if (weather === false) {
}

// Opérateur "!" siginfie le contraire de
if (!weather) {
}
