function solve(input){

    let res = {};
    for(let el of input){
        let arr = el.split(' | ');
        let town = arr[0];
        let product = arr[1];
        let price = Number(arr[2]);

        if(!res.hasOwnProperty(product)){
            res[product] = { price, town };
            } else {
                let arr = [];
                let metric = 0;
               for(let param in res[product]){
                metric = res[product][param];
                if(typeof metric === 'number'){
                    arr.push(metric)
                }
               }    
               let comparison = Number(arr[0]);

               if(price < comparison){
                res[product] = { price, town };
               }
        }
    }

    for(let print of Object.entries(res)){
        let printProduct = print[0];
        let obj = print[1];
        let finalRes = [];
        for(let element of Object.values(obj)){
            finalRes.push(element);
        }
        console.log(`${printProduct} -> ${finalRes[0]} (${finalRes[1]})`);
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