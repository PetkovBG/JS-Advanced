function previousDay(year, month, day){

    let myDate = new Date(year, month - 1, day);
    // console.log(currentDate.getFullYear()); //gets the year
    // console.log(currentDate.getMonth()); //gets month - months start from 0 in JS
    // console.log(currentDate.getDay()); //gets day of week
    // console.log(currentDate.getDate()); // gets day of month
    myDate.setDate(myDate.getDate() - 1)
    let correctMonth = myDate.getMonth() + 1;
    //console.log(correctMonth);
    console.log(`${myDate.getFullYear()}-${correctMonth}-${myDate.getDate()}`);


}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);