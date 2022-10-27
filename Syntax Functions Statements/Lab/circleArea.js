function circleArea(param){

let type = typeof param;

if(type !== 'number'){
    console.log(`We can not calculate the circle area, becase we recieve a ${type}.`);
} else{
    let r = param;
    let area = Math.PI * (param ** 2);
    console.log(area.toFixed(2));
}

}
circleArea(5);