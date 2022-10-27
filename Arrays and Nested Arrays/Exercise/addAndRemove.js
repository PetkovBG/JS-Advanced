function addAndRemove(array) {

    let initialNum = 0;
    let res = [];

    for (let i = 0; i < array.length; i++) {
        initialNum++;
        if (array[i] === 'add') {
            res.push(initialNum)
        } else if (array[i] === 'remove') {
            res.pop();
        }
    }
    if (res.length > 0) {
        for (let el of res) {
            console.log(el);
        }
    } else {
        console.log('Empty');
    }

}
addAndRemove(['add',
    'add',
    'add',
    'add']);