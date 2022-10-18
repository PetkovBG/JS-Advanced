function createAssemblyLine() {

    return {
        hasClima(car) { },
        hasAudio(car) { },
        hasParktronic(car) { }
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

createAssemblyLine();