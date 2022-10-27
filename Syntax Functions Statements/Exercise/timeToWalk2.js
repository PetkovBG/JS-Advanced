function timeToWalk2(steps, footprint, speed) {

    let distanceInMeters = steps * footprint;
    let speedInSec = speed / 3.6;
    let time = distanceInMeters / speedInSec;
    let rest = Math.floor(distanceInMeters / 500)
    //time += rest * 60;

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin * 60));
    let timeInH = Math.floor(time / 3600);
    timeInMin += rest;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
timeToWalk2(4000, 0.60, 5);