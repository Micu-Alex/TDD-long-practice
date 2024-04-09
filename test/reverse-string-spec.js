const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString', () => {
  
  it("should throw an error the input is not a string", () => {
    expect(() => reverseString(0)).to.throw()
  }) 

  it("should correctly reverse the string", () => {
    expect(reverseString("fun")).to.eql("nuf")
  }) 
});