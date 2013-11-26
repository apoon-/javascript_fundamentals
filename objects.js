//The Recipe Card

var recipe = {
  name: function(str) {
    console.log(str);
  },
  servings: function(num) {
    console.log("Serves: " + num);
  },
  ingredients: function(arr) {
    for (var i = 0; i < arr.length; i++){
      console.log(arr[i]);
    }  
  }
}

recipe.name("Mole");
recipe.servings(2);
recipe.ingredients(["cinnamon", "cumin", "cocoa"]);

//The Reading List

var readList = [
  { title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    status: true},
  { title: "Outliers",
    author: "Malcolm Gladwell",
    status: true},
  { title: "Freakonomics",
    author: "Steven Levitt",
    status: false}
  ];

for (var i = 0; i < readList.length; i++ ) {
  var book = readList[i];
  console.log(book.title + " by " + book.author);
  if (book.status == true) {
    console.log("You read " + book.title);
  } else {
    console.log("You have yet to read " + book.title);
  }
};

// The Movie Database

var movie = {
  title: "",
  duration: 0,
  actors: [],
};

movie.title = "Puff the Magic Dragon";
movie.duration = 30;
movie.actors = ["Puff", "Jackie", "Living Sneezes"];

console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars:");
  for (var i = 0; i < movie.actors.length; i++) {
    console.log(movie.actors[i]);
  }