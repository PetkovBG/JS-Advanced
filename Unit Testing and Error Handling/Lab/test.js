function solve(array){

const { expect } = require('chai');

console.log('Test');
let res = 0;
for(let num of array){
res += Number(num);
}


describe('array program', () =>{

    it('should return correct result using an array of numbers', () =>{
            //Arrange
            let testArray = [50, 100];
            //Act
            let res = 50 + 100;
            //Assert
            // if(res != 63){
            //  throw new Error('Not correct result')   
            // }
        expect(res).to.be.equal(150);

    }),

    it('should return NaN if input is not an array', ()=>{

    })
});

}
solve([1, 10, 5]);