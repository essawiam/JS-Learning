// Method ==> refrence the object it self :

const video = {
  title: "JS review",
  play() {
    console.log(this);
  },
};

video.play();

// function ==> refrence the global object (window in browser , global in node ) :

function eat() {
  console.log(this);
}

eat();

// Define a constructor function for a Person object
// Will  refrence the object it self.
function Person(name) {
  this.name = name;
  console.log(this);
}

const p = new Person("Wiam");
