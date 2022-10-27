function listOfNames(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));
    let counter = 0;

    for (let name of sorted) {
        counter++;
        console.log(`${counter}.${name}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);