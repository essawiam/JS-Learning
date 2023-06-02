// ES6
class Car {
  constructor(color, model, year) {
    this.color = color;
    this.model = model;
    this.year = year;
  }
  logInfo() {
    console.log(
      "Color is = ",
      this.color,
      " Model is = ",
      this.model,
      " Year is = ",
      this.year
    );
  }
}

const bmw = new Car("Black", "3er-Reihe", "2023");

bmw.logInfo();
