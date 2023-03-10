alert("Hi !  You can choose a country name and see info about it.");

const buttons = document.getElementById("buttons");//to add country names as buttons
const flag = document.getElementById("flag");//to add flags image

const official = document.getElementById("official");// to add different outputs
const capital = document.getElementById("capital");
const area = document.getElementById("area");
const population = document.getElementById("population");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const borders = document.getElementById("borders");
const languages = document.getElementById("languages");
const currencies = document.getElementById("currencies");

fetch("https://restcountries.com/v3.1/all")//public API 
  .then((countries) => countries.json())
  .then((data) => {
    data.map(eachCountry => eachCountry.name.common)//countries names are in 'common' property
    .forEach((country, index) => {
        buttons.innerHTML += `<button id=${index}>${country}</button><br>`//each items index assign as id
    });
    document.querySelectorAll("button").forEach(choice => {
      choice.addEventListener('click', (e) => {
        let ind = e.target.id;//targeting possible choices by id's
        flag.src = data[ind].flags.png;//taking the elements by their indexes in the API
        official.innerHTML = JSON.stringify(data[ind].name.official);
        capital.innerHTML = JSON.stringify(data[ind].capital);
        area.innerHTML = JSON.stringify(data[ind].area);
        population.innerHTML = JSON.stringify(data[ind].population);
        region.innerHTML = JSON.stringify(data[ind].region);
        subregion.innerHTML = JSON.stringify(data[ind].subregion);
        borders.innerHTML = JSON.stringify(data[ind].borders);
        languages.innerHTML = JSON.stringify(data[ind].languages);
        currencies.innerHTML = JSON.stringify(data[ind].currencies);
      })
    })
  })
  