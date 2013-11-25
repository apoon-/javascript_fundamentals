//What number's bigger?

var greaterNum = function(num1, num2){
  if (num1 > num2){
    console.log(num1);
  } else {
    console.log(num2);
  }
}

greaterNum(2,3);
greaterNum(5,7);

//The World Translator

var helloWorld = function(lang){
  if (lang == "de"){
    console.log("Hello World");
  } else if (lang == "fr"){
    console.log("Bonjour tout le monde");
  } else if (lang == "gr"){
    console.log("Hallo Welt");
  } else {
    console.log("Hello World");
  }
}

helloWorld("de");
helloWorld("fr");
helloWorld("gr");
helloWorld("en");

//The Grade Assigner 

var assignGrade = function(percent){
  if (percent > 80){
    console.log("Congrats, you got an A");
  } else if (percent > 70){
    console.log("You got an B");
  } else if (percent > 60){
    console.log("You got an C");
  } else if (percent > 50){
    console.log("You got an D");
  } else {
    console.log("YOU FAILED, F!");
  }
}

assignGrade(95);
assignGrade(81);
assignGrade(75);
assignGrade(65);
assignGrade(55);
assignGrade(45);

//The Pluralizer

var pluralize = function(num, noun){
  if (num > 1){
    console.log(num + " " + noun + "s");
  } else {
    console.log(num + " " + noun);
  }
}

pluralize(5, "cat");
pluralize(1, "dog");