// FONCTION PREDEFINIE (native)

// 1. indexOf()
// cherche la position d un element dans une chaine de caractere (si l element n est pas trouve il retourne -1)
let sentence = "Bonjour Eddy comment tu vas ?";
let position = sentence.indexOf("Eddy");
document.write(`<p>L'élement est à la position ${position} </p>`);

// 2. substr()
// decoupe une chaine de caractere a partir d une position et prend un nombre de caracteres
// decoupe la phrase à partir de la position 8 et prend 4 caracteres :
let cutSentence = sentence.substr(8, 4);
document.write(`<p>Le nouvel élément extrait ${cutSentence} </p>`);

// 3. includes()
// verifie si une chaine de caractere contient un element (retourne true ou false)
// let mail = prompt("Tapez votre mail ici:");

// if (mail.includes("@")) {
// 	alert("Format d'email est valide");
// } else {
// 	alert("Format d'email invalide");

// }

// toLowerCase()
// met en minuscule une chaine de caractere

// toUpperCase()
// met en majuscule une chaine de caractere

// 4. length
// retourne la longueur d une chaine de caractere(ou le nombre d element d un tableau)
document.write(
	`<p>La phrase: ${sentence} contient ${sentence.length} de caractères</p>`,
);

// FONCTION UTILISATEUR
function myFunction() {
	console.log("Hello à toi Fabrice");
}
myFunction();

function askFirstname(firstname) {
	console.log(`Bonjour à toi ${firstname}`);
}

let user = prompt("Votre prénom SVP");
askFirstname(user);

function meteo(saison, temperature) {
	let message = `Nous sommes en ${saison} et il fait ${temperature} degrés`;
	document.write(`<p>${message}</p>`);
}

let season = prompt("Donnez moi une saison");
let degree = prompt("Donnez moi une température");

meteo(season, degree);
