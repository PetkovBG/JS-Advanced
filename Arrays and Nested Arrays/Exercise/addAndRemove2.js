function addAndRemove2(array) {

    let initialNum = 0;
    let res = [];

    array.forEach(command => {
        switch (command) {
            case 'add':
                initialNum++;
                res.push(initialNum);
                break;
            case 'remove':
                initialNum++;
                res.pop();
                break;
            default:
                break;
        }
    })

    if (res.length === 0) {
        console.log('Empty');
    } else {
        console.log(res.join('\n'));
    }
}
addAndRemove2(['add',
    'add',
    'add',
    'add']);