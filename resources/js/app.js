let name = "banner";
const randomNumber = Math.floor(Math.random(1) * 3);
const path = "resources/images/";
const image = document.getElementById("banner");

name += randomNumber;
const finalPath = path + name + ".svg";

image.src = finalPath;

