//The Fortune Teller

var children = "",
    name = "",
    geo = "",
    job = "";

geo = prompt("Where will you live?");
job = prompt("What will be your job?");
name = prompt("Who will you marry?");
children = prompt("How many children will you have?");

console.log("You will be a " + job + " in " + geo + ", and married to " + name + " with " + children + " kids.");

//Age Calculator

var CurrentYear = 2013,
    BirthYear,  
    Age, 
    AgeDown;

BirthYear = prompt("What year were you born?");

Age = CurrentYear - BirthYear;

AgeDown = Age - 1;

console.log("You are either " + AgeDown + " or " + Age);

//Lifetime Supply Calculator

var CurrentAge,
    MaxAge,
    PerDay,
    Life,

CurrentAge = prompt("What is your current age?");
MaxAge = prompt("What age will you live till?");
PerDay = prompt("How many chocolates would you eat a day?");

Life = (MaxAge - CurrentAge)*PerDay;

console.log("You will need " + Life + " chocolates to last you untill the ripe old age of " + MaxAge + ".");

//Geometrizer

var Radius,
    Circum,
    Cir_Area;

Radius = prompt("What is the radius of your circle?");

Circum = Math.PI * (2*Radius);

Cir_Area = Math.PI * Radius * Radius;

console.log("The circumference is " + Circum + " cm.");
console.log("The area is " + Cir_Area + " cm2.");

//Temperature Converter 

var Cel,
    Far,

Cel = prompt("What is the temperature in Celsius?");
Far = (((9/5)*Cel)+32);
console.log(Cel + " Celsius is " + Far + " in Farenheit.");
Far = prompt("What is the temperature in Farenheit?");
Cel = (5/9)*(Far-32);
console.log(Far + " Farenheit is " + Cel + " in Celsius.");