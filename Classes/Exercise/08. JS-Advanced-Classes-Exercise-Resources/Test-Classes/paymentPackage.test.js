let PaymentPackage = require('../paymentPackage');
let { assert } = require('chai');

describe('Testing the paymentPackage class functionality', ()=>{

    describe('create instance', ()=>{
        let paymentPackage;
        beforeEach(()=>{
            paymentPackage = new PaymentPackage('Orlin', 28);
        }),
        it('Testing if the class functionality eturns the correct name', ()=>{
            assert.equal(paymentPackage._name, 'Orlin', 'the string should equal the one from the function above');
            assert.equal(typeof paymentPackage._name, 'string');
            let testName = '';
            //assert.equal(testName, 'Error: Name must be a non-empty string');
        });
        it('Testing if the class functionality returns the correct value', ()=>{
            assert.equal(paymentPackage._value, 28)
            assert.equal(typeof paymentPackage._value, 'number');
        }),
        it('Testing if VAT value is equal to 20', ()=>{
            assert.equal(paymentPackage._VAT, 20);
            assert.equal(typeof paymentPackage._VAT, 'number');
        }),
        it('Testing if value active is set to true', ()=>{
            assert.equal(paymentPackage._active, true);
            assert.equal(typeof paymentPackage._active, 'boolean');
        })
    });
    describe('test getter functionality', ()=>{
        let paymentPackage;
        beforeEach(()=>{
            paymentPackage = new PaymentPackage('Ivan', 30);
        })
            it('test if getter returns correct name', ()=>{
                assert.equal(paymentPackage.name, 'Ivan', 'it works')
            });
            it('getter should return correct value for value', ()=>{
                assert.equal(paymentPackage.value, 30);
            }),
            it('getter should return correct value for VAT', ()=>{
                assert.equal(paymentPackage.VAT, 20);
            }),
            it('getter should return correct value for active', ()=>{
                assert.equal(paymentPackage._active, true);
            })
    
});
    describe('Testing the setter functionality', ()=>{  
        // //let paymentPackage;
        // beforeEach(()=>{
        //     paymentPackage = new PaymentPackage('Orlin', 10);
        // })
        it('Testing the error functionality with incorrect name parameter', ()=>{
            assert.throws(() => {new PaymentPackage(10, 30)}, 'Name must be a non-empty string')
            //assert.throws()
        }),
        it('Testing if the name parameter is an empty string', ()=>{
            assert.throws(()=> {new PaymentPackage('', 10)}, 'Name must be a non-empty string')
        }),
        it('Testing the name value is correct', ()=>{
            let paymentPackage = new PaymentPackage('Peter', 25);
            assert.equal(paymentPackage.name, 'Peter');
            paymentPackage.name = 'George';
            assert.equal(paymentPackage.name, 'George')
        }),
        it('Testing value parameter with a string value instead of a number value', ()=>{
            assert.throws(()=> {new PaymentPackage('Ivan', 'Aleksandrov')}, 'Value must be a non-negative number')
        }),
        it('Testing value param with a negative number value', ()=>{
            assert.throws(()=>{new PaymentPackage('Georgi', -10)}, 'Value must be a non-negative number')
        }),
        it('Testing if the value parameter is set correctly', ()=>{
            let paymentPackage = new PaymentPackage('Smith', 55);
            assert.equal(paymentPackage.value, 55);
            paymentPackage.value = 56;
            assert.equal(paymentPackage.value, 56)
        }),
        it('testing with value set at 0 - this is an edge case', ()=>{
            let paymentPackage = new PaymentPackage('Smith', 0);
            assert.equal(paymentPackage.value, 0);
        }),
         it('testing if vat is of a number type', ()=>{
            let paymentPackage = new PaymentPackage('John', 22);
            assert.throws(()=>{paymentPackage.VAT = 'Angel'}, 'VAT must be a non-negative number')
        }),
        it('Testing VAT with a negative number', ()=>{
            let paymentPackage = new PaymentPackage('Roberto', 29);
            assert.throws(()=>{paymentPackage.VAT = - 1}, 'VAT must be a non-negative number')
        }),
        it('Set correct VAT value', ()=>{
            let paymentPackage = new PaymentPackage('Martin', 16);
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 30;
            assert.equal(paymentPackage.VAT, 30);
        }),
        it('Testing active type', ()=>{
            let paymentPackage = new PaymentPackage('Joseph', 18);
            assert.throws(()=>{paymentPackage.active = 'Message'}, 'Active status must be a boolean')
        }),
        it('Testing active correct initial value', ()=>{
            let paymentPackage = new PaymentPackage('Todor', 25);
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false)
        })
    })
    describe('Testing toString functionality', ()=>{
        let paymentPackage;
        beforeEach(()=>{
            paymentPackage = new PaymentPackage('Orlin', 10);
        })
        it('Test active status', ()=>{
            const output = [
                `Package: Orlin`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
              ].join('\n')
              assert.equal(paymentPackage.toString(), output);
        }),
        it('Test with active being false', ()=>{
            paymentPackage.active = false;
            const output = [
                `Package: Orlin (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
              ].join('\n')
              assert.equal(paymentPackage.toString(), output);
        })
    })
});