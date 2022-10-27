let { assert } = require('chai');
let { lookupChar } = require('../charLookup');

describe('Testing functionality of char lookup function where we find a char of a given index', ()=>{
    it('should return undefined if the input is not of string type', ()=>{
        assert.equal(lookupChar(10, 10), undefined);
    }),
    it('should return undefined if the first parameter of the input is not a string but an array instead', ()=>{
        assert.equal(lookupChar(['Ivan'], 10), undefined)
    }),
    it('should return undefined if the second parameter is not an integer because we need an integer to serve as an index', ()=>{
        assert.equal(lookupChar('Ivan is a great student', 2.5), undefined)
    }),
    it('should return undefined if either the first param is not a string or the second param is not an integer or both', ()=>{
        assert.equal(lookupChar({age: 28}, '13.6'), undefined)
    }),
    it('should return the message `Incorect index` if the index is a negative number or if the index is outside the bounds of the string', ()=>{
        assert.equal(lookupChar('This is an example', -2), 'Incorrect index')
    }),
    it('should return `Incorrect index` if the index is outside the bounds of the string', ()=>{
        assert.equal(lookupChar('Have a great day!', 24), 'Incorrect index')
    }),
    it('should return `Incorrect index` with index equal to the string length', ()=>{
        assert.equal(lookupChar('Test', 4), 'Incorrect index')
    }),
    it('should return the char of the provided index', ()=>{
        assert.equal(lookupChar('This is the solution', 3), 's')
    }),
    it('should return the char of the given index', ()=>{
        assert.equal(lookupChar('Great!', 4), 't')
    })

});