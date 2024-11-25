/*const inputValue = document.querySelector(".inputValue");
const temp = document.querySelector(".temp");
const feels = document.querySelector(".feels");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

function weather() {
    const apiKey = "9d14fab5293af26cf8dc10b7ff26e891";
    const URL = `https://api.openweathermap.org/data/2.5/weather?id=${inputValue.value}&appid=${apiKey}&units=metric`;
   
    fetch (URL + apiKey) 

    .then((response) => response.json())


    .then((data) => 
    {    //console.log(data))
    ( temp.innerHTML = `${data.value} C`),
     ( feels.innerHTML = `${data.value} C`),
      ( humidity.innerHTML = `${data.value} C`),
       ( wind.innerHTML = `${data.value} C`)
})

    .catch((err) => {
        console.log(`ERROR: ${err}`);
        
    });

}
weather();
*/

// correction
const APIKEY = "9d14fab5293af26cf8dc10b7ff26e891";

let city;
let input = document.querySelector("#city");

input.addEventListener("input", function (e) {
city = e.target.value;
// console.log(city);
// console.log(e);
weather();
});

const weather = () => {
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

fetch(URL)
.then((response) => response.json())
.then((data) => {
console.log(data);
document.querySelector("#temp").innerHTML = `${data.main.temp} °`;
document.querySelector("#feels").innerHTML = `${data.main.feels_like} °`;
document.querySelector("#humidity").innerHTML = `${data.main.humidity} %`;
document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`;
})
.catch((err) => {
console.log(`Échec de récupération: ${err}`);
});
};