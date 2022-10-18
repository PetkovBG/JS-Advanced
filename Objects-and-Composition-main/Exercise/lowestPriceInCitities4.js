function solve(data) {

    let res = {};

    for (let el of data) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (res.hasOwnProperty(product)) {
            let currentPrice = res[product]['price'];
            if (currentPrice > price) {
                res[product] = { town, price };
            }
        } else {
            res[product] = { town, price };
        }

    }
    for (let [product, value] of Object.entries(res)) {
        console.log(`${product} -> ${value.price} (${value.town})`);
    }

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
console.log('------');
solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
]);