let { expect } = require('chai');
let { isOddOrEven } = require('../evenOrOdd');

describe('oddOrEven Functionality', ()=>{
    it('should return undefined if input is not a string', ()=>{
        //Arrange
    let input = 10;
    //Act
    let result = isOddOrEven(input);
    //Assert
    expect(result).to.be.undefined; //with assert: assert.equal(isOddOrEven([]), undefined);
    }),
    it('should return undefined if the input is not a string', ()=>{
        let input = {name: 'Orlin'};
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    })
    it('should return even if the string is of even length', ()=>{
        let input = 'Building';
        let result = isOddOrEven(input);
        expect(result).to.equal('even')
    }),
    it('should return odd if the string is of odd length', ()=>{
        let input = 'Wonderful';
        let result = isOddOrEven(input);
        expect(result).to.equal('odd')
    });
});