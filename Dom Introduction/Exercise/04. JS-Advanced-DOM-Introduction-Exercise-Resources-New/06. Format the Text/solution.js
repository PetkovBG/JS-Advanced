function solve() {
  let input = document.getElementById('input').value;
  let arr = input.split('.').filter(x=>x.length > 0);
  let output = document.getElementById('output');
  output.innerHTML = '';


  for (let i = 0; i < arr.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {
      if (arr[i + x]) {
        res.push(arr[i + x])
      }
    }
    let resText = res.join('. ') + ".";
    output.innerHTML += `<p>${resText}</p>`
  }


}


// //** I tried with the solution below */

// let arr = input.split('.');
// console.log(arr);
// let sentences = arr.length;
// let target = document.getElementById('output');
// let text = '';
// let counter = 0;
// for(let el of arr){
//   text += el;
//   counter++;
//   if(counter % 3 === 0){
//     let res = `<p>${text}</p>`
//     target.innerHTML += `<p>${text}</p>`
//     text = '';

//   }
// }
// target.innerHTML += `<p>${text}</p>`;