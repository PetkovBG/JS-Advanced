function solve(data){

    let res = {};
    res.model = data.model;
    let powerSpec = data.power;
    let cc = 0;
    if(powerSpec <= 105){
        powerSpec = 90;
        cc = 1800;
    } else if (powerSpec > 105 && powerSpec <= 160){
        powerSpec = 120;
        cc = 2400;
    } else if (powerSpec > 160){
        powerSpec = 200;
        cc = 3500;
    }

    res.engine = {
        power: powerSpec,
        volume: cc
    };
    res.carriage = {
        type: data.carriage,
        color: data.color
    };
    let wheelSize = data.wheelsize;
    if(wheelSize % 2 === 0){
        wheelSize--;
    }
    let wheelArr = [];
    for(let i = 0; i < 4; i++){
        wheelArr.push(wheelSize)
    };
    res.wheels = wheelArr;

    return res;

}
solve({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
);