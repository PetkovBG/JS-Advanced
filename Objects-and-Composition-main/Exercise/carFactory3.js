function solve(data){

    let res = {};
    res.model = data.model;

    let engineEnum = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
        
    };
    

    let powerSpec = data.power;
    if(powerSpec <= 90){
        res.engine = engineEnum['small'];
    } else if (powerSpec <= 120){
        res.engine = engineEnum['normal'];
    } else if (powerSpec <= 200){
        res.engine = engineEnum['monster'];
    }

    res.carriage = {
        type: data.carriage,
        color: data.color
    };
    let wheelSize = data.wheelsize;
    wheelSize % 2 === 0 ? wheelSize-- : wheelSize;
    res.wheels = new Array(4).fill(wheelSize);

    return res;

}
solve({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
);