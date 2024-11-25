let age = prompt("Indiquez votre age");
if (age > 18) {
alert("Bienvenue, vous etes bien majeur.")
} 
else
 {
alert('Go to other site');
window.location.href = 'http://www.google.com';
 };

 /*
 
// 1 -- je déclare la majorité légale
let majoriteFR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un NUMBER
let age = parseInt(prompt("Indiquez votre âge"));

// 3 -- je vérifie si mon internaute est majeur
if (age >= majoriteFR) {
	alert("Bienvenue, vous êtes bien majeur !");
} else {
	// s'il est mineur je lui signale
	alert("Allez voir un autre super site de votre âge...");
	// et ensuite je redirige vers Darty ;-)
	document.location.href = "http://www.darty.com/";
}
 
 */