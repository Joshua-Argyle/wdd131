document.getElementById("intro").style.backgroundColor = "#f2c556";

document.querySelector("em").style.backgroundColor = "#acbfcc";

document.querySelector("em").textContent = "USS Voyager Starship";

const starshipDiv = document.getElementById("starship");
const image = document.createElement("img");

image.src = "https://bit.ly/3RfG4sY"; 
image.alt = "USS";

starshipDiv.appendChild(image);

image.id = 'ship';
let img1 = document.querySelector("#ship");
img1.classList.add("rounded");
