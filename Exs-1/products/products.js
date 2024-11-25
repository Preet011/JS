/*
const button1 = document.querySelector('button1');
const button2= document.querySelector("button2");
const button3 = document.querySelector("button3");

let allProducts = [ {
    type: "clothes",
    product: "T-shirt",
    price : "20€",
},
 { 
    type: "Clothes",
    product: "Jeans",
    price : "40€"
},
{ 
    type: "Clothes",
    product: "Pants",
    price : "50€"
},
 { 
    type: "Electronic",
    product: "Computer",
    price : "1000€"
},
{ 
    type: "Electronic",
    product: "Telephone",
    price : "600€"
}];


function click() {
if (button1) {
    
} else if (button2) {

} else if (button3) {

}
};
click()
document.write(`<p>${allProducts[0].type} - ${allProducts[0].product} - ${allProducts[0].price}</p>`);
    document.write(`<p>${allProducts[1].type} - ${allProducts[1].product} - ${allProducts[1].price}</p>`);
    document.write(`<p>${allProducts[2].type} - ${allProducts[2].product} - ${allProducts[2].price}</p>`);
    document.write(`<p>${allProducts[3].type} - ${allProducts[3].product} - ${allProducts[3].price}</p>`);
    document.write(`<p>${allProducts[4].type} - ${allProducts[4].product} - ${allProducts[4].price}</p>`);
    
*/

// correction
// Tableau d'objets représentant les produits
const produits = [
	{ product: "Ordinateur", price: 1000, category: "Electronique" },
	{ product: "Téléphone", price: 600, category: "Electronique" },
	{ product: "T-shirt", price: 20, category: "Vêtements" },
	{ product: "Jeans", price: 40, category: "Vêtements" },
	{ product: "Pantalon", price: 50, category: "Vêtements" },
];

// Fonction pour afficher l'inventaire
function displayInventory(productsToDisplay) {
	let inventoryHTML = "<ul>";
	for (let i = 0; i < productsToDisplay.length; i++) {
		inventoryHTML += `<li>${productsToDisplay[i].product} - ${productsToDisplay[i].price}€ - ${productsToDisplay[i].category}</li>`;
	}
	inventoryHTML += "</ul>";
	document.getElementById("inventaire").innerHTML = inventoryHTML;
    
    
}

// Fonction pour filtrer les produits par catégorie + function to filter products by their category
function filtrerParCategorie(category) {
	let productsFiltered = [];
	for (let i = 0; i < produits.length; i++) {
		if (produits[i].category === category) {
			productsFiltered.push(produits[i]);
		}
	}
	return productsFiltered;
}

// Fonction pour afficher tous les produits +  function to display all products 
function allProducts() {
	displayInventory(produits);
}

// Fonction pour afficher les produits par catégorie + function to display products by their category
function productsByCategory(category) {
	let productsFiltered = filtrerParCategorie(category);
	displayInventory(productsFiltered);
}

// Initialiser l'affichage en montrant tous les produits + display all products
allProducts();
