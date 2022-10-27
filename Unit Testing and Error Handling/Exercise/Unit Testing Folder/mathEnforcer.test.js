let { assert } = require('chai');
let { mathEnforcer } = require('../mathEnforcer');

//describe('Testing the functionality of mathEnforcer object that consists of 3 functions', ()=>{
        describe('Testing functionality of addFive function', ()=>{
            it('the function should return undefined if the parameter is not a number', ()=>{
                assert.equal(mathEnforcer.addFive('10'), undefined);
            }),
            it('Testing if function adds 5 to the param and returns the result', ()=>{
                assert.equal(mathEnforcer.addFive(15), 20);
            })
            it('Testing how the program behaves with negative values for parameters', ()=>{
                assert.equal(mathEnforcer.addFive(-5), 0)
            }),
            it('testing assertTo method', ()=>{
                assert.closeTo(mathEnforcer.addFive(0.03), 5.03, 0.01);
            }),
            // it('test floating point numbers', ()=>{
            //     assert.closeTo(mathEnforcer.addFive(14.333), 19.333, 0.01);
            // }),
        //})
        //describe('Testing the functionality of SubtractTen function', ()=>{
            it('the function should return undefined if the parameter is not a number', ()=>{
                assert.equal(mathEnforcer.subtractTen('text'), undefined);
            }),
            it('Testing if function subtracts 10 to the param and returns the result', ()=>{
                assert.equal(mathEnforcer.subtractTen(65), 55);
            }),
            it('Testing how the program behaves with negative values for parameters', ()=>{
                assert.equal(mathEnforcer.subtractTen(-12), -22)
            }),
            it('testing assertTo method', ()=>{
                assert.closeTo(mathEnforcer.subtractTen(-1.03), -11.03, 0.01);
            }),
            it('test floating point numbers', ()=>{
                assert.closeTo(mathEnforcer.subtractTen(24.400), 14.400, 0.01);
            }),
        //})
        //describe('Testing the functionality of sum function', ()=>{
            it('If any of the two parameters received is not a number the function should return undefined', ()=>{
                assert.equal(mathEnforcer.sum('text', 5), undefined)
            }),
            it('If any of the two parameters received is not a number the function should return undefined', ()=>{
                assert.equal(mathEnforcer.sum('1', 5), undefined)
            }),
            it('If any of the two parameters received is not a number the function should return undefined', ()=>{
                assert.equal(mathEnforcer.sum(10, '5'), undefined)
            }),
            it('If both params are numbers the function should return their sum', ()=>{
                assert.equal(mathEnforcer.sum(10, 120), 130)
            }),
            it('Testing how the program behaves with negative values for parameters', ()=>{
                assert.equal(mathEnforcer.sum(-8, -4), -12)
            })
            it('testing assertTo method', ()=>{
                assert.closeTo(mathEnforcer.sum(1, 4.1), 5.1, 0.01);
            }),
            it('testing assertTo method', ()=>{
                assert.closeTo(mathEnforcer.sum(0.01, 0.07), 0.08, 0.01);
            }),
            it('test floating point numbers', ()=>{
                assert.equal(mathEnforcer.sum(14.345, 10.155), 24.5, 500);
            })
        });
//});