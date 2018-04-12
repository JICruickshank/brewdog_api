const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  // displayBeers(beers);
  // console.log(getIngredients(beers[0]));
  createDropDown(beers);
  selectBeer(beers);

}

const createUl = function(id) {
  const ul = document.createElement("ul");
  ul.id = id;
}

const createContainer = function(className) {
  const div = document.createElement("div");
  div.className = className;
}

const createPTag = function(innerText) {
  const pTag = document.createElement("p");
  pTag.innerText = innerText;
  return pTag;
}

const createHeader = function(innerText) {
  const header = document.createElement("h2");
  header.innerText = innerText;
  return header;
}

const createLi = function(id, innerText) {
  const li = document.createElement("li");
  li.innerText = innerText;
  const ul = document.getElementById(id);
  ul.appendChild(li);
}

const createImage = function(url) {
  // const li = document.createElement("li");
  const img = document.createElement("img");
  // const ul = document.getElementById(id);
  img.src = url;
  img.height = 300;
  img.width = 300;
  return img;
  // li.appendChild(img);
  // ul.appendChild(li);
}

const createDropDown = function(beers) {
  const container = document.getElementById("dropDown");
  const select = document.createElement("select");
  select.id = "beerList"
  for(let i = 0; i < beers.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = beers[i].name;
    select.add(option, null);
  }
  container.appendChild(select);
}

const selectBeer = function(beers) {
  const select = document.querySelector("#beerList");
  select.addEventListener("change", function() {
    const beer = beers[select.value];
    displayBeer(beer);
  })


}

// const displayBeers = function(beers) {
//   for(let beer of beers) {
//     createLi("beer-list", beer.name.toUpperCase());
//     createImage("beer-list", beer.image_url);
//   }
// }

const displayBeer = function(beer) {
  const container = document.querySelector("#displayBeer");
  const header = createHeader(`${beer.name} - ${beer.abv}%`);
  container.appendChild(header);
  const image = createImage(beer.image_url);
  container.appendChild(image);
}

// const getIngredients = function(beer) {
//   const ingredients = [];
//   for(let ingredient in beer.ingredients) {
//     ingredients.push(beer.ingredients[ingredient]);
//   }
//   debugger;
//   ingredients = ingredients.flatten(2);
// }

var app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
