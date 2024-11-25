/*let player = prompt("Enter rock, paper or scissor");
let computer = Math.random();
if ( computerChoice < 0.33) {
    computerChoice = "rock"; 
}

computer = computerChoice;

if (playerChoice === computerChoice) {
   document.write("A TIE")
} 
 if (playerChoice == "paper" &&  computerChoice == "rock") 
    {  document.write("Computer picked rock. YOU WIN!")}
 if (playerChoice == "paper" &&  computerChoice == "scissor") 
    {  document.write("Computer picked scissor. YOU WIN!")}
  if (playerChoice == "rock" &&  computerChoice == "paper") { 
     document.write("Computer picked paper. YOU LOSE!")}
      if (playerChoice == "rock" &&  computerChoice == "scissor") 
    {  document.write("Computer picked scissor. YOU WIN!")}
 if (playerChoice == "scissor" &&  computerChoice == "rock") 
    {  document.write("Computer picked rock. YOU LOSE!")}
  if (playerChoice == "scissor" &&  computerChoice == "paper")
     {  document.write("Computer picked paper. YOU WIN!")}
  */ 
 // Correction
  let userChoice = prompt(
    "Entrez votre choix (pierre, feuille, ciseaux) :",
    ).toLowerCase();
    let computerChoice;
    let randomChoice = Math.floor(Math.random() * 3);
    let resultMessage;
    
    console.log(Math.floor(Math.random()));
    
    if (randomChoice === 0) {
    computerChoice = "pierre";
    } else if (randomChoice === 1) {
    computerChoice = "feuille";
    } else {
    computerChoice = "ciseaux";
    }
    
    resultMessage = "Ordinateur a choisi : " + computerChoice + ". ";
    
    if (userChoice === computerChoice) {
    resultMessage += "C'est un match nul !";
    } else if (
    (userChoice === "pierre" && computerChoice === "ciseaux") ||
    (userChoice === "feuille" && computerChoice === "pierre") ||
    (userChoice === "ciseaux" && computerChoice === "feuille")
    ) {
    resultMessage += "Vous avez gagnÃ© !";
    } else if (
    userChoice === "pierre" ||
    userChoice === "feuille" ||
    userChoice === "ciseaux"
    ) {
    resultMessage += "Vous avez perdu.";
    } else {
    resultMessage = "Choix invalide, veuillez entrer pierre, feuille ou ciseaux.";
    }
    
    alert(resultMessage);