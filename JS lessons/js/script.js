//1_ Declaration d'une variable
let temps; 

//2_Assingner d'une valeur a la variable

temps = "pluvieux";

//Verification de la valeur dans la console

console.log(temps);

alert("Super, tu es arrivé sur mon site!");
window.alert("J'affiche une nouvelle boite de dailogue");

// Ecrire sur la page
document.write("<h1>C'est stylé le Jvascript!</h1>");

// Demander à l'utilisateur une valeur(2façons)
let answer = prompt("Question: On est quel jour aujourd'hui?");
//window.prompt("Question: On est quel jour aujourd'hui? ")
document.write(`<p>La réponse est: ${answer}</p>`);

let weatherofday;

//CamelCase
let weatherOfDay;

//PascalCase
let WeatherOfDay;

//SnakeCase
let weather_of_day;

//Possibilité de réassigner une nouvelle valeur à notre variable
temps = "nuageux";
console.log(temps);

/* LES TYPES DE VARIABLES */

// 1. Chaine de charactres (string)
let holidays = "2020";
let destination = "Egypte";

// 2. Un nombre entier(integer ou int)
let year = 2015;

// 3. Un nombre décimal (float)
let number = 3.55;

// 4. Un booléen (boolean Vrai ou Faux = TRUE/FALSE)
 let condition = false;
 
// 5. Une constante
const PAYS = "France"; //string
const YEAR = 2021;//integer

// 6. connaitre le type d'une variable avec typeof
console.log(typeof YEAR);
console.log(typeof holidays);

// NUMBER => STRING 
let otherNumber = 20;
otherNumber = otherNumber.toString();
console.log(typeof otherNumber);

//STRING => NUMBER
let number2 = "36";
// let number = "36. 5"
number2 = parseInt(number2);
// number2 = parseFloat(number2);
console.log(typeof number2);

/*---------
LA CONCATENATION
---------*/

let year = 2024;
let future = 3;

let result = year + future;
console.log(`Résultat un : ${result}`);

document.write("<p>" + year + " + " + future + " = " + result + "</p>");

let month = "7";
let calcul = year + month;
console.log(`Résultat deux : ${calcul}`); // impossible de faire le calcul avec un type string

let startSentence = "Aujourd'hui ";
let nbPeople = 12;
let middleSentence = " stagiaires";
let endSentence = "sont présents.";
document.write(
	"<h1>" +
		startSentence +
		" " +
		nbPeople +
		middleSentence +
		" " +
		endSentence +
		"</h1>",
);

document.write(
	`<h1> ${startSentence} ${nbPeople} ${middleSentence} ${endSentence}</h1>`,
);

/* je déclare mes variables */
let nb1, nb2, resultat;

/* j'affecte des valeurs */
nb1 = 10;
nb2 = 5;

/* j'utilise mes variables avec un calcul */
resultat = nb1 + nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

// -- 2. Soustraction
resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// -- Le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log(
	"Le reste de la division de " +
		nb1 +
		" par " +
		nb2 +
		" est égal à : " +
		resultat,
);

// -- 6. Ecritures simplifiées
nb1 = 15;
console.log("le 1er = " + nb1);
nb1 = nb1 + 5; // égal à 20
console.log("le 2éme = " + nb1);

nb1 += 10;
// nb1 = nb1 + 10

console.log('Le résultat de "nb1 += 10;" est ' + nb1);


// -- Incrémentation
let nb1 = 1;
nb1 = nb1 + 1;
// affichage => nb1 = 2
console.log(`Incrémentation avec opérateur: ${nb1}`);

// Ecriture simplifiée
nb1++;
// affichage => nb1 = 3
console.log(`Incrémentation simplifiée: ${nb1}`);

// Ecriture simplifiée
++nb1;

// affichage => nb1 = 4
console.log(nb1);

// -- décrémentation
nb1 = nb1 - 1;
console.log(`Décrémentation avec opérateur: ${nb1}`);

// écriture simplifiée
nb1--;
console.log(`Décrémentation simplifiée: ${nb1}`);
// écriture simplifiée
--nb1;
console.log(`Décrémentation simplifiée: ${nb1}`);


