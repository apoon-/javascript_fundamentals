//The Fortune Teller

function fortune(job, geo, name, children){
  alert("You will be a " + job + " in " + geo + ", and married to " + name + " with " + children + " kids.");
}

fortune("Web Developer", "Toronto", "Jessica Alba", "2");
fortune("Pimp", "Las Vegas", "Someone", "5");
fortune("Actor", "Hollywood", "Megan Fox", "1");

//The Age Calculator

function calculateAge(b_year){
  
  var currentTime = new Date();

  var Year = currentTime.getFullYear();

  var Age = Year - b_year;

  var AgeDown = Age - 1;

  alert("You are either " + AgeDown + " or " + Age);
}

calculateAge(1991);
calculateAge(1955);
calculateAge(1961);

//The Lifetime Supply Calculator

function calculateSupply(Age, Amount){
  
  var Lifetime = 100 - Age;

  var Life = Lifetime * Amount;

  alert("You will need " + Life + " chocolates to last you until the ripe old age of 100");
}

calculateSupply(22, 5);
calculateSupply(30, 3);
calculateSupply(25, 2);

//The Geometrizer

function calcCir(rad){
  var Circum = Math.PI * (2*rad);
  return Circum;
}

function calcArea(rad){
  var CirArea = Math.PI * Math.pow(rad,2);
  return CirArea;
}

alert("The circumference is " + calcCir(5));
alert("The area is " + calcArea(5));

//The Temperature Converter

function cToF(celsius){
  var far = (((9/5)*celsius)+32);
  alert(celsius + "°C is " + far + "°F");
}

function fToC(faren){
  var cel = (5/9)*(faren-32);
  alert(faren + "°F is " + cel + "°C");
}

cToF(30);
fToC(86);