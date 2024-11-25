/*
// give random numbers

function addTwoNumbers(num1, num2) 
{
  let  total = num1 + num2;
   console.log(total);
document.write(`<p> The total is ${total}</p>`)
};
// call function 

addTwoNumbers(1, 2);

// ask for numbers

function askUser (num1, num2 )
 {
    let total = parseInt(num1) + parseInt(num2); 
    console.log(total);
    let message = `Sum of  ${num1} + ${num2} = ${total} ` ;
    console.log(message);
	document.write(`<p>${message}</p>`);
};

let firstNum =  prompt("Enter a Number");
let secondNum =  prompt("Second Number");

// call function 

 askUser(firstNum, secondNum);

 */

// correction


// VERSION 1

function addition(nb1, nb2) {
    let somme = nb1 + nb2;
    return somme;
    }
    let result = addition(1, 2);
    console.log(result);
    document.write(`Le premier résultat est: ${result}`);
    
    // VERSION 2
    
    let userNb1 = parseInt(prompt("Donne moi un nombre :"));
    let userNb2 = parseInt(prompt("Donne moi un second nombre :"));
    let resultUser = addition(userNb1, userNb2);
    document.write(
    `<p style='color:red'>Le résultat de ${userNb1} + ${userNb2} = ${resultUser} </p>`,
    );