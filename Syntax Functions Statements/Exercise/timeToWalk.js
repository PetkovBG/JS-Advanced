function timeToWalk(steps, length, speed){

let speedInM = speed / 3.6;
let distance = steps * length;
let totalTime = distance / speedInM;
let breaks = Math.floor(distance / 500);
totalTime += breaks * 60;
let hours = Math.floor(totalTime / 3600);

let minutes = Math.floor(totalTime / 60);
// console.log(minutes);
let preSeconds = (totalTime / 60) - (Math.floor(totalTime / 60));
let seconds = Math.round(preSeconds * 60);
// console.log(totalTime);
// console.log(seconds);
if(hours === 0){
    console.log(`0${hours}:${minutes}:${seconds}`);
} else{
    console.log(`${hours}:${minutes}:${seconds}`);
}

}
timeToWalk(4000, 0.60, 5);