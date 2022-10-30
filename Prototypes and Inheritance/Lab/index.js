let car = {
    model: 'Opel',
    get engineCC() {
        return this._engineCC
    },
    set engineCC(value) {
        if (value < 0 && typeof value !== 'number') {
            throw new Error('engineCC value is not valid.')
        }
        this._engineCC = value;
    }

}

car.engineCC = 2000;

for (let property in car) {
    if (property[0] === '_') { //We are ignoring private members such as _engineCC with this if statement
        continue;
    }
    console.log(property + ' ' + car[property]);
}
