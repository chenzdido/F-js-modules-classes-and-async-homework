import Person from "./Person";

class Student extends Person {
  constructor(name, className) {
    super(name);
    this.name = name;
    this.className = className;
    this.study = this.study.bind(this);
  }

  study() {
    this.move();
    console.log(`${this.name} is studying in ${this.className}`);
  }
}

export default Student;
