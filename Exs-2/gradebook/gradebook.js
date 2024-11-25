const student = {
sam : {
        name: "Sam",
        notes: [15, 16, 18],
       
},

Aaron: {
    name: "Aaron",
    notes: [12, 16, 3], 
},
Emma: {
    name: "Emma",
    notes: [], 
},
    
};

const {sam,Aaron,Emma} = student;

const samnotes = sam.notes;
const aaronnotes = Aaron.notes;
const emmanotes = Emma.notes;

function somme(x, y, z) {
	return (x + y + z) / 3;
};

const resultatSam = Math.round(somme(...samnotes));
const resultatAaron = Math.round(somme(...aaronnotes));
const resultatEmma = Math.round(somme(...emmanotes));

console.log(resultatSam);
console.log(resultatAaron);
console.log(resultatEmma);


const msg = `<div>
 <h2> ${sam.name}</h2>
       <p><strong>Notes:</strong> ${sam.notes}</p>
       <p><strong>Average:</strong> ${resultatSam}</p>
       </div>
       <div>
  <h2> ${Aaron.name}</h2>
       <p><strong>Notes:</strong> ${Aaron.notes}</p>
       <p><strong>Average:</strong> ${resultatAaron}</p>
       </div>
       <div>
   <h2> ${Emma.name}</h2>
       <p><strong>Notes:</strong> ${Emma.notes}</p>
       <p><strong>Average:</strong> ${resultatEmma}</p></div> 
`
const result = document.getElementById("result");

result.innerHTML = msg;


/**************************************CORRECTION***************************************************************************************************/

/**
 // 1. Tableau initial des élèves
const students = [
	{ name: "Magalie", notes: [15, 18, 12] },
	{ name: "John", notes: [10, 14, 13] },
	{ name: "Charlie", notes: [] }, // Élève sans notes
];
console.log(students);

// Fonction pour afficher le tableau des élèves et leurs moyennes
function displayStudents() {
	const resultDiv = document.getElementById("result");

	const studentsHTML = students
		.map((student) => {
			const { name, notes } = student;
			const totalNotes = notes.reduce((acc, note) => acc + note, 0);
			const average =
				notes.length > 0
					? (totalNotes / notes.length).toFixed(2)
					: "Aucune moyenne";

			return `
            <div>
                <h2>${name}</h2>
                <p><strong>Notes :</strong> ${
									notes.length > 0 ? notes.join(", ") : "Aucune note"
									// if(notes.length > 0) { document.querySelector("p").innerHTML = notes.join(", ") } else { document.querySelector("p").innerHTML = "Aucune note" }
								}</p>
                <p><strong>Moyenne :</strong> ${average}</p>
            </div>
        `;
		})
		.join("");

	resultDiv.innerHTML = studentsHTML;
}

// Afficher les élèves au chargement de la page
displayStudents();

 ****/