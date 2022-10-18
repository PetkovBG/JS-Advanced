function solve(parameter) {

if(parameter.dizziness === true){
    parameter.levelOfHydrated += parameter.experience * parameter.weight / 10;
    parameter.dizziness = false;
    return parameter;
} else{
    return parameter;
}

}
solve(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);
