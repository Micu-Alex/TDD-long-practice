const { expect } = require('chai');
const spies = require('chai-spies');

const myMap = require('../problems/my-map');


describe("myMap", () => {
    context("invalid arguments", ()=> {
        it("should throw if inputArray is not an array", () => {
            expect(() => myMap(0, () => {})).to.throw();
            expect(() => myMap("test", () => {})).to.throw();
        }) 
    
        it("should throw if callback is not a function", () => {
            expect(() => myMap([1, 2, 3], 0)).to.throw();
            expect(() => myMap([1, 2, 3], "test")).to.throw();
        })
    })

    context("valid arguments", ()=> {
        it("should call the callback on each element of the array", () => {
            const callback = (el) => el * 2;
            expect(myMap([1, 2, 3], callback)).to.deep.equal([2, 4, 6])
        })
      

        it("should not mutate the original argument array", () => {
            const arr = [1, 2, 3];
            const callback = (el) => el * 2;
            const result = myMap(arr, callback);
            expect(result).to.not.equal(arr);
            expect(arr).to.deep.equal([1, 2, 3]);
        });
     })
})