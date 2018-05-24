var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.getElementById("random");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);

// changes background style of body to 
// linear-gradient(to right, color1.value , color2.value);
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	console.log(color1.value);
	console.log(color2.value);

	css.textContent = body.style.background + ";";
}

// generates a random rgb-number and compiles it to a hex-number
function rgbToHex() {
	var rgbNumbers = [0, 0, 0];
	var hexNumbers = [0, 0, 0];
	var hexCode = "#";
	for (j = 0; j < 3; j++) {
		rgbNumbers[j] = Math.floor((Math.random() * 255) + 1);
		hexNumbers[j] = rgbNumbers[j].toString(16);
		if (hexNumbers[j].length < 2) {
			hexCode += "0" + hexNumbers[j];
		} else {
			hexCode += hexNumbers[j];
		}
	}
	return hexCode;
}

// sets the color values to the randomly calculated hex-number
// then sets the randomly calculated color values as body background style
function setRandomColors() {
	var colors = ["#000000", "#000000"];
	for (i = 0; i < 2; i++) {
		colors[i] = rgbToHex();
	}
	color1.value = colors[0];
	color2.value = colors[1];
	setGradient();
}


setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColors);

