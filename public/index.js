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
  displayBeers(beers);
  debugger;
}

const createUl = function(id) {
  const ul = document.createElement("ul");
}

const createContainer = function(className) {
  const div = document.createElement("div");
}

const createLi = function(id, innerText) {
  const li = document.createElement("li");
  li.innerText = innerText;
  const ul = document.getElementById(id);
  ul.appendChild(li);
}

const displayBeers = function(beers) {
  for(let beer of beers) {
    createLi("beer-list", beer.name);
  }
}

var app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
