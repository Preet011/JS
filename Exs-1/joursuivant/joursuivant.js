
let jour = prompt("Entrez jour de la semaine?");

if(jour == "lundi"){
alert(`Demain c'est mardi!`)}
 else if (jour == "mardi") {
    alert(`Demain c'est mercredi!`)
 }
 else if (jour == "mercredi") {
    alert(`Demain c'est jeudi!`)
 }
 else if (jour == "jeudi" ) {
    alert(`Demain c'est vendredi!`)
 }
 else if (jour == "vendredi") {
    alert(`Demain c'est samedi!`)
 }

 else if (jour == "samedi") {
    alert(`Demain c'est dimanche!`)
 }
 else if (jour == "dimache") {
    alert(`Demain c'est lundi!`)
 }
 else 
{alert("jour incorrect")};

/*
let userDay = prompt("Entrez le jour de la semaine").toLowerCase();

if (userDay === "samedi") {
	alert("Demain sera Dimanche");
} else if (userDay === "dimanche") {
	alert("Demain sera lundi");
} else if (userDay === "lundi") {
	alert("Demain sera mardi");
} else if (userDay === "mardi") {
	alert("Demain sera Mercredi");
} else if (userDay === "mercredi") {
	alert("Demain sera Jeudi");
} else if (userDay === "jeudi") {
	alert("Demain sera Vendredi");
} else if (userDay === "vendredi") {
	alert("Demain sera samedi");
} else {
	alert("Entre un jour de la semaine valide");
}
*/
// VERSION AVEC LE SWITCH
switch (userDay) {
	case "samedi":
		alert("Demain sera Dimanche");
		break;
	case "dimanche":
		alert("Demain sera Lundi");
		break;
	case "lundi":
		alert("Demain sera Mardi");
		break;
	case "mardi":
		alert("Demain sera Mercredi");
		break;
	case "mercredi":
		alert("Demain sera Jeudi");
		break;
	case "jeudi":
		alert("Demain sera Vendredi");
		break;
	case "vendredi":
		alert("Demain sera Samedi");
		break;
	default:
		alert("Entre un jour de la semaine valide");
}