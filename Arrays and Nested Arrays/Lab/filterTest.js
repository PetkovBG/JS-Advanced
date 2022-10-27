function solve(){


    
    let arrTwo = ['1', '2', '3', '4'];
    let res = arrTwo
    .map(Number)
    .filter(n => n % 2 == 0); //or (n => n > 2)
    console.log(res); //returns new arr with items filtered based on the criteria

    let arr = [10, 20, 30];

    let filtered = arr.filter(el =>{
        return el % 3 == 0;
    })
    console.log(filtered);

    let nameArr = ['George', 'Ivan', 'Orlin', 'Ivo', 'Martin'];

    let query = 'iv';
    let finalResult = nameArr
    .filter(text => {
        return text.toLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
    });
    console.log(finalResult);
    
    }
    solve();