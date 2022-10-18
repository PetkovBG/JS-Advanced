function solve(input) {

    const towns = {};

    for (let town of input) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (towns[name] !== undefined) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
    }
    for (let el in towns) {
        console.log(`${el} : ${towns[el]}`);
    }

}
let result = solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);