// Without Tax

let prix = prompt("Entrez votre prix HT?");
document.write(`Prix HT: ${prix}€`);

// With Tax

let tva = 20 / 100 * prix;
console.log('Prix TTC: ' + tva + '€');