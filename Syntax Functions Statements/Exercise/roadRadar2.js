function roadRadar2(speed, location) {

    let speedLimit = {
        'city': 50,
        'interstate': 90,
        'motorway': 130,
        'residential': 20
    }

    let speedInNum = Number(speed);

    if (speedInNum > speedLimit[location]) {
        let diff = speedInNum - speedLimit[location];
        result(diff);
    } else {
        console.log(`Driving ${speedInNum} km/h in a ${speedLimit[location]} zone`);
    }
    function result(diff) {
        if (diff <= 20) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[location]} - speeding`);
        } else if (diff <= 40) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[location]} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[location]} - reckless driving`);
        }
    }

}
roadRadar2(40, 'city');
roadRadar2(120, 'interstate');