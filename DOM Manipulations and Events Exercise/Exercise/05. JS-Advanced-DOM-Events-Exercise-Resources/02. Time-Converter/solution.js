function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));
    for (let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(e) {
        let value = e.target.parentElement.querySelector('input[type=text]').value
        value = Number(value);
        let unit = e.target.id;

        switch (unit) {
            case 'daysBtn':
                populate(value);
                break;
            case 'hoursBtn':
               populate(value / 24);
                break;
            case 'minutesBtn':
                populate(value / 1440);
                break;
            case 'secondsBtn':
               populate(value / 86400);
                break;
        }
    }
    function populate(value){
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
        let currentValue = value * 24;
        for(let el of inputs){
            el.value = currentValue;
            currentValue *= 60;
        }
    }
}


// The solution below is my version for start of the task solution
// let daysInput = document.getElementById('days').value;
// //daysInput.textContent = document.getElementById('days').value;
// let hoursInput = document.getElementById('hours').value;
// let minutesInput = document.getElementById('minutes').value;
// let secondsInput = document.getElementById('seconds').value;


// if(daysInput.length > 0){
//     daysInput = Number(daysInput);
//     hoursInput = daysInput * 24;
//     minutesInput = daysInput * 1440;
//     secondsInput = daysInput * 86400;
// } else if(hoursInput.length > 0){
//     hoursInput = Number(hoursInput);
//     daysInput = hoursInput / 24;
//     minutesInput = daysInput * 1440;
//     secondsInput = daysInput * 86400;
// } else if(minutesInput.length > 0){
//     minutesInput = Number(minutesInput);
//     daysInput = hoursInput / 1440;
//     hoursInput = daysInput * 24
//     secondsInput = daysInput * 86400;
// } else if (secondsInput.length > 0){
//     secondsInput = Number(secondsInput);
//     daysInput = secondsInput / 86400
//     hoursInput = daysInput * 24;
//     minutesInput = daysInput * 1440;
// }

// let days = document.getElementById('daysBtn');

// days.addEventListener('click', daysF);
// debugger;
// function daysF(event){
//     console.log(event.target);
// }