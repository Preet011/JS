
function choose(option){
 let message = "";

switch(option) {
 case 1:
    message = "Delicious cheezy pizza";
    break;
 case 2:
    message = "White saucy pasta"
    break;
 case 3:
    message = "Healthy green salad"  
    break;
 case 4:
    message =  "For an Asian touch" 
    break;
 default:
    message = "Sorry, it's not on menu."
  }

  document.getElementById("message").innerHTML = message;

}

