// TABLEAUX

// Création d'un tableau

let array = [];
console.log(array.length);

// Les indices des tableaux commencent toujours à la position 0
let tab = ["Hello", 23];
console.log(tab);
console.log(tab.length);

// Accéder à une position donnée dans le tableau
let index = tab[1];
console.log(index);

// Ajouter un élément à la fin du tableau
let newElement = array.push("Navigateur");
console.log(array);

let again = array.push("Internet", "Écran", 13);
console.log(array);

document.write(`<p style='color:orange'>Sans boucle: ${array}</p>`);

for (let i = 0; i < array.length; ++i) {
	document.write(`<p style='color:blue'>Après boucle: ${array[i]}</p>`);
}

for (let i = 0; i < array.length; ++i) {
	if (i == 2) {
		document.write(`<p style='color:green'>Après boucle: ${array[i]}</p>`);
	}
}

// Ajouter un élément au début du tableau
let add = array.unshift("Avion");
console.log(array);

// Supprimer un élément à la fin du tableau
let supp = array.pop();
console.log(array);

// Supprimer un élément au début du tableau
let start = array.shift();
console.log(array);

// Supprimer un élément  par son index
let suppIndex = array.splice(1, 2); // On supprime deux éléments à partir de la 2ème position
console.log(array);

// LES OBJETS

// Déclarer un objet vide

let obj = {};
console.log(obj);

// ajouter une nouvelle valeur dans l'objet
obj.phone = "Iphone";
console.log(obj);

// Système clé => valeur / key => value
let obj2 = {
	// key --- value
	phone: "Iphone",
	desktop: "Windows",
};

console.log(obj2);

// pour ajouter un objet dans notre tableau précédent
let newArray = array.push(obj2);

console.log(array);

let family = [
	{
		father: "François",
		mother: "Jeannine",
	},
	{
		sister: "Lucienne",

		phone: "06898798",
	},
];

let family2 = {
	father: "François",
	mother: "Jeannine",
};

console.log(family2.father);

console.log(family.length);

for (let i = 1; i < family.length; i++) {
	console.log(family[0].mother);
	document.write(`<p>${family[1].phone} et ${family[1].sister}</p>`);
}