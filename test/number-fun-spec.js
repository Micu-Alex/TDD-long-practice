const { expect } = require('chai');
const returnsThree = require('../problems/number-fun').returnsThree;
const reciprocal = require('../problems/number-fun').reciprocal;

describe("returnsThree", () => {

    it("should return the number 3", () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe("reciprocal", () => {

    context("valid arguments", function() {
        it("should return the reciprocal of the given positive argument", function() {
          expect(reciprocal(2)).to.equal(0.5);
          expect(reciprocal(4)).to.equal(0.25);
        });
    
        it("should return the reciprocal of the given negative argument", function() {
          expect(reciprocal(-3)).to.equal(-1/3);
        });
    
        it("should return Infinity for the reciprocal of 0", function() {
          expect(reciprocal(0)).to.equal(Infinity);
        });
      });
    
      context("invalid arguments", function() {
        it("should return NaN when given a non-numeric argument", function() {
          expect(reciprocal("not a number")).to.be.NaN;
        });
    
        it("should return NaN when given undefined", function() {
          expect(reciprocal(undefined)).to.be.NaN;;
        });
      });
})
