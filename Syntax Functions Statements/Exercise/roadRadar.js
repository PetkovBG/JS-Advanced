function roadRadar(speed, area) {
    let speedLimit = 0;
    let status = '';
    let diff = 0;

    switch (area) {
        case 'motorway':
        speedLimit = 130;
            if(speed <= 130){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if(speed <= 150){
                status = 'speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else if (speed <= 170){
                status = 'excessive speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else {
                status = 'reckless driving';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if(speed <= 90){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if(speed <= 110){
                status = 'speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else if (speed <= 130){
                status = 'excessive speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else {
                status = 'reckless driving';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            }
            break;
        case 'city':
            speedLimit = 50;
            if(speed <= 50){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if(speed <= 70){
                status = 'speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else if (speed <= 90){
                status = 'excessive speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else {
                status = 'reckless driving';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            }
            break;
        case 'residential':
            speedLimit = 20;
            if(speed <= 20){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if(speed <= 40){
                status = 'speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else if (speed <= 60){
                status = 'excessive speeding';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            } else {
                status = 'reckless driving';
                diff = speed - speedLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`); 
            }
            break;
        default:
            break;
    }

}
roadRadar(40, 'city');
console.log('---');
roadRadar(21, 'residential');
console.log('---');
roadRadar(120, 'interstate');
console.log('---');
roadRadar(200, 'motorway');