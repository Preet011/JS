let ask = prompt("Your age?");
let license =  prompt("Do you have a license?");

 if (ask > 16 && license  === "oui") {

document.write("You can drive.")
} else if (ask > 16 && license  === "non")
 {
    document.write("You can't drive.")
} else if (ask <= 16 &&  license  === "oui") 
    {
        document.write("You are too young too drive.")}

else {
   alert("Error")
}

