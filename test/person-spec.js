const { expect } = require('chai');

const Person  = require("../problems/person");

let person;
beforeEach(function() {
    person = new Person("Gabone", 99)
})

describe('Person', () => {
    
    context("Person constructor function", () => {
        it("should have an 'name' property", () =>  {
            expect(person).to.have.property("name")
        })

        it("should have an 'age' property", () =>  {
            expect(person).to.have.property("age")
        })
    })

    context("Person instance methods", () => {
        it("should return a hello message form prson", () => {
            expect(person.sayHello()).to.equal("Hello from Gabone")
        })

        it("should return a message stating that this instance visited other person instance ", () => {
            const otherPerson = new Person("Ionute", 12)
            expect(person.visit(otherPerson)).to.equal("Gabone visited Ionute")
        }) 

        it("should call visit function of otherPerson with correct argument", () => {
            const otherPerson = new Person("Ionute", 12)
            expect(person.switchVisit(otherPerson)).to.equal("Ionute visited Gabone")
        }) 
        
        context("update method", () => {
            it("should update instance properties if argument is a valid object", () => {
                person.update({ name: "Lulu", age: 57 });
                expect(person.name).to.equal("Lulu");
                expect(person.age).to.equal(57);
            });

            it("should throw TypeError if argument is not a valid object", () => {
                expect(() => person.update(null)).to.throw(TypeError, 'Argument must be a valid object');
                expect(() => person.update(undefined)).to.throw(TypeError, 'Argument must be a valid object');
                expect(() => person.update(123)).to.throw(TypeError, 'Argument must be a valid object');
                expect(() => person.update("string")).to.throw(TypeError, 'Argument must be a valid object');
            });

            it("should throw TypeError if argument object does not have name and age properties", () => {
                expect(() => person.update({ name: "Lulu" })).to.throw(TypeError, 'Object must have both name and age properties');
                expect(() => person.update({ age: 57 })).to.throw(TypeError, 'Object must have both name and age properties');
                expect(() => person.update({})).to.throw(TypeError, 'Object must have both name and age properties');
            });
        });

        
    context('#greetAll', function() {
        it('should return an array of greetings for an array of Person instances', function() {
          // Arrange
          const people = [
            new Person("Alice", 30),
            new Person("Bob", 35),
            new Person("Charlie", 40)
          ];
    
          // Act
          const greetings = Person.greetAll(people);
    
          // Assert
          expect(greetings).to.be.an('array');
          expect(greetings).to.have.lengthOf(3);
          expect(greetings[0]).to.equal("Hello from Alice");
          expect(greetings[1]).to.equal("Hello from Bob");
          expect(greetings[2]).to.equal("Hello from Charlie");
        });
    
        it('should throw TypeError if argument is not an array', function() {
          // Arrange
          const notAnArray = {};
    
          // Act & Assert
          expect(() => Person.greetAll(notAnArray)).to.throw(TypeError, 'Argument must be an array of Person instances');
        });
    
        it('should throw TypeError if array contains non-Person instances', function() {
          // Arrange
          const people = [
            new Person("Alice", 30),
            "Bob", // Not a Person instance
            new Person("Charlie", 40)
          ];
    
          // Act & Assert
          expect(() => Person.greetAll(people)).to.throw(TypeError, 'Array must only contain instances of Person');
        });
      });
    })

})