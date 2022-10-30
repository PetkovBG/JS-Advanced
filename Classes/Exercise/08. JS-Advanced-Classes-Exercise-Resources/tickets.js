function solve(arr, command) {

    let resArr = [];
    let sortCriteria = 0;
  
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let el of arr) {
        el = el.split(',')

        for (let info of el) {
            let [dest, price, status] = info.split('|');
            let result = new Tickets(dest, Number(price), status);
            resArr.push(result);
        }
     
    }

    if (command === 'destination') {
        resArr = resArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (command === 'price') {
        resArr = resArr.sort((a, b) => a.price - b.price);
    } else if (command === 'status') {
        resArr = resArr.sort((a, b) => a.status.localeCompare(b.status));
    }
    return resArr;
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
console.log('----');
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
);