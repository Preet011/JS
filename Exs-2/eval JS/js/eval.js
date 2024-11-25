// get all elemEnts from HTML and declare it 

const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul")

//add "click" event on button Ajouter
btn.addEventListener("click", (e) => {
 e.preventDefault();
//get input's value
  const newTask = input.value;
   console.log(newTask);
//if  input is empty
     if(newTask === ''){
        alert('ERROR!!! Input vide.');
//return to stop the function from executing
         return;
           }
// clear input field 
    input.value = '';
 //call function addTask with arg newTask
    addTask(newTask);
 
});

function addTask(task){
// create list element
  const newList = document.createElement("li");

//console.log(newList);
//input text in  list element
  const taskText = document.createElement("span");
      taskText.textContent = task;
//console.log(taskText); 

      newList.appendChild(taskText);
 console.log(ul);   

// delete button
  const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Supprimer";
      newList.appendChild(deleteBtn);
// styling delete button
      deleteBtn.style.color = "#ff3333 ";
      deleteBtn.style.margin = "5px";
// console.log(deleteBtn);
// Add to html
      ul.appendChild(newList);
// Adding an event to deleBtn to delete li when clicked
 deleteBtn.addEventListener("click", () => {
      ul.removeChild(newList);
      
})

};


