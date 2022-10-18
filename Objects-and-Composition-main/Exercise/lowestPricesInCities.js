function solve(input){

    let res = {};


    for(let el of input){
        let arr = el.split(' | ');
        let town = arr[0];
        let product = arr[1];
        let price = Number(arr[2]);

        if(res.town !== town){
            console.log(res.town);
            res.town = town;
            res.obj = { product, price };
            // res.town.prodcut = product;
            // res.town.price = price
            } else {
                if(product !== res.obj.product){
                    
                }
            if(price < res.obj.price){
                res.obj.price = price;
            }
        }
    }
    console.table(res);

// let [town, product, price] = input.split(' | ');
// console.log(town);

}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);