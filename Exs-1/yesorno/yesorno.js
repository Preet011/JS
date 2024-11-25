
/*let userInput = prompt("Enter something");
for (let i = 0; i <= userInput; i++) {
    if (userInput == "yes" || userInput == "no" )
        {
       console.log`<p style='color:green'>You got it after ${i} turns</p>`;
       }   
}*/
// 2nd attempt
/*
let i = 0;
while( i >= userInput) {

   

    if (userInput == "yes" || userInput == "no" )
         {
        console.log`<p style='color:green'>You got it after ${i} turns</p>`;
        i++
        }  }*/
       // correction


let userAnswer = "";
let round = 0;

while (
userAnswer !== "oui" &&
userAnswer !== "non" &&
userAnswer !== "Oui" &&
userAnswer !== "Non" &&
userAnswer !== "OUI" &&
userAnswer !== "NON"
) {
userAnswer = prompt("On joue Ã ni oui ni non?");
round++;
}
if (round === 1) {
document.write(
`<p style="color:red">Tu as perdu au bout de ${round} tour.</p>`,
);
} else {
document.write(
`<p style="color:red">Tu as perdu au bout de ${round} tours.</p>`,
);
}