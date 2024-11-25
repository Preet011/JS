/* LES BOUCLES */

// -- la boucle FOR (pour)

// for (3 arguments) {
// Instructions
// }

/*
1. Initialisation de la variable, un compteur à partir duquel on ajoutera +1 (en général on initialise à 0 ou 1)
2. La condition à vérifier à TRUE 
3. L'incrémentation de la variale
*/



for (let i = 0; i <= 10; i ++) {
	document.write(`<p style='color:blue'>Je suis le nouveau numéro ${i}</p>`);
}

// -- la boucle WHILE (tant que)

let j = 1;

while (j <= 10) {
	document.write(`<p style='color:violet'>Je passe par ici ${j}</p>`);
	++j;
}

let k = 1;
while (k <= 10) {
	if (k === 5)
		document.write(
			`<p style='color:green'>Je suis bien celui que tu cherches: ${k}</p>`,
		);
	++k;
}

// -- la boucle DO... WHILE (faire... tant que)

let count = 1;

do {
	document.write(`<p style='color:red'>Le compteur: ${count}</p>`);
	++count;
} while (count > 10);
