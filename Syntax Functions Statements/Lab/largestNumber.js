function largestNum(first, second, third){

if(first > second){
    if(first > third){
        console.log(`The largest number is ${first}`);
    } else {
        console.log(`The largest number is ${third}`);
    }
} else if(second > third){
    console.log(`The largest number is ${second}`);
} else {
    console.log(`The largest number is ${third}`);
}

}
largestNum(3, 4, 5)