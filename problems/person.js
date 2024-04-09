class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  sayHello() {
    return `Hello from ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Argument must be a valid object');
    }
    if (!('name' in obj) || !('age' in obj)) {
      throw new TypeError('Object must have both name and age properties');
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  static greetAll(people) {
    if (!Array.isArray(people)) {
      throw new TypeError('Argument must be an array of Person instances');
    }

    const greetings = [];
    for (const person of people) {
      if (!(person instanceof Person)) {
        throw new TypeError('Array must only contain instances of Person');
      }
      greetings.push(person.sayHello());
    }

    return greetings;
  }
}



module.exports = Person;