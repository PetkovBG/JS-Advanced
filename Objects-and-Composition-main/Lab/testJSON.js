function solve(){

    let obj = { name: "John", age: 30, city: "New York" };
    let myJSON = JSON.stringify(obj);

    console.log(myJSON);

    let arr = [ "John", "Peter", "Sally", "Jane" ];
    let myJSONArr = JSON.stringify(arr);

    console.log(myJSONArr);

    let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }'; 
    let parsedObj = JSON.parse(data);
    console.log(parsedObj.manager.lastName)

    

}
solve();