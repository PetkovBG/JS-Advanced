function addAndRemove3(array) {

    let initialNum = 1;
    let res = [];

    array.forEach(command => {
        command === 'add' ? res.push(initialNum) : res.pop();
        initialNum++;
    })
    return res.length === 0 ? 'Empty' : res.join('\n');
}
console.log(addAndRemove3(['add',
    'add',
    'add',
    'add']));