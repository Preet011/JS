const result = document.querySelector("#result");

async function loadJson(url) {
    try {
       const response = await fetch(url);
          console.log(response); 

 if (response.status == 200) {

     let res = await response.json();
      console.log(res);
      return res;

      } else {

        throw new Error(response.status);
      } 

    } catch (error){
        console.error(error);
    }

};

function display(){ 
   
    loadJson('search-user.json')
    .then((res) => {
        for(let i=0; i < res.length; i++){
            console.log(res[i].address.city);
        
             result.innerHTML += `
               <div>
                  <h2>${res[i].firstname}</h2>
                  <h3>${res[i].lastname}</h3>
                  <p>${res[i].address.details_add}</p>
                  <p>${res[i].address.city}</p>
                  <p>${res[i].address.zip_code}</p>
               </div>
        `
        }
    })
    .catch(alert)

 };
    
display();
  
/****************************************CORRECTION**************************************/
/*
let url = "../data/search-user.json";
const person = document.querySelector("#result");

async function loadJson(url) {
	// (1)
	let response = await fetch(url); // (2)
	console.log(response);

	if (response.status === 200) {
		let json = await response.json(); // (3)
		console.log(json);
		return json;
	} else {
		throw new Error(response.status);
	}
}

function final() {
	loadJson(url)
		// .then((response) => console.log(response))
		.then((response) => {
			for (let i = 0; i < response.length; ++i) {
				person.innerHTML += `
									<div id="people">
										<p>Identité de la personne: ${response[i].firstname} <b>${response[i].lastname}</b></p>
										<p>Adresse: ${response[i].address.details_add}, ${response[i].address.zip_code} ${response[i].address.city}</p>
									</div>
									`;
			}
		})
		.catch(alert); // Error: 404 (4)
}

final();
*/