const person = {
  name: "Lara",
  age: 22,
  city: "Paris",
  hobby: "Skating",
  profession: "Writer"
};

function displayPersonInfo(Obj){
  const{name, age, city, hobby, profession} = Obj;
     //console.log(person);
    const msg = `
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Age:</strong> ${age}</p>
       <p><strong>City:</strong> ${city}</p>
       <p><strong>Hobby:</strong> ${hobby}</p>
       <p><strong>Profession:</strong> ${profession}</p>`;

       const result = document.getElementById("result");
       result.innerHTML = msg;
    
}

function updatePersonInfo(){
  const newObj = {
    ...person, 
    profession: "Designer"};
     //console.log(newObj)

     displayPersonInfo(newObj);
    
};

document.getElementById("show").addEventListener("click",() => {displayPersonInfo(person)});
document.getElementById("update").addEventListener("click", updatePersonInfo);


/*********************************************Correction*****************************************/
/*
// 1. Création de l'objet 'person'
const person = {
	name: "Julie",
	age: 28,
	city: "Paris",
	hobby: "Photographie",
	profession: "Développeuse",
};

// 2. Fonction pour afficher les informations sur la page
function displayPersonInfo(personObj) {
	// Utilisation du destructuring pour extraire les valeurs
	const { name, age, city, hobby, profession } = personObj;

	// Utilisation des template literals pour formater le message
	const message = `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Âge :</strong> ${age} ans</p>
        <p><strong>Ville :</strong> ${city}</p>
        <p><strong>Loisir préféré :</strong> ${hobby}</p>
        <p><strong>Profession :</strong> ${profession}</p>
    `;

	// Sélectionner l'élément DOM et afficher le message
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = message;
}

// 3. Fonction pour mettre à jour l'objet 'person' avec le spread operator
function updatePersonInfo() {
	// Création d'un nouvel objet avec les propriétés mises à jour
	const updatedPerson = {
		...person,
		profession: "Designer", // Modification de la profession
	};

	// Afficher les informations mises à jour
	displayPersonInfo(updatedPerson);
}

// 4. Ajouter des événements de clic aux boutons pour afficher les informations
document.getElementById("show-info").addEventListener("click", function () {
	displayPersonInfo(person); // Afficher les informations originales
});

document
	.getElementById("update-info")
	.addEventListener("click", updatePersonInfo); // Afficher les informations mises à jour

*/