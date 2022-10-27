function solve(area, vol, input){

    input = JSON.parse(input);

    let result = [];

    for(let entry of input){
        let calculatedArea = area.call(entry)
        let calculatedVolume = vol.call(entry);

        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        })
    }
    //console.log(JSON.stringify(result));
    return result;
    
}
let area = function area(){
    return Math.abs(this.x * this.y);
}
let vol = function vol(){
    return Math.abs(this.x * this.y * this.z);
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )

    // //Could also be done like this:
    // function solve(area, vol, input){
    //     return JSON
    //             .parse(input)
    //             .map(entry =>{
    //                 return {
    //                     area: area.call(entry),
    //                     volume: vol.call(entry)
    //                 }
    //             });
    // }