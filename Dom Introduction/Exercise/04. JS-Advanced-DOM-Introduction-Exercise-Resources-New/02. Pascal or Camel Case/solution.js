function solve() {
  
let input = document.getElementById('text').value;
let currentCase = document.getElementById('naming-convention').value;

let textArr = input.split(' ');
let res = '';
switch(currentCase){
  case 'Camel Case':
    textArr.forEach((e, i)=>{
      if(i === 0){
        return res += e.toLowerCase();
      } 
      return res += e[0].toUpperCase() + e.substring(1).toLowerCase();
    });
    break;
    case 'Pascal Case':
    textArr.forEach((e, i)=>{
      res += e[0].toUpperCase() + e.substring(1).toLowerCase();
    });
      break;
      default:
        res = 'Error!'
        break;
}

document.getElementById('result').textContent = res;


}



// //***
// input = input.toLowerCase();
// let res = [];

// if(currentCase === 'Pascal Case'){
//   input = input.join(' ');
//   for(let el of input){
//     let first = el.slice(0, 1);
//     let rest = el.substring(1);
//     let word = first.toUpperCase() + rest;
//     res.push(word);
//   }
// } else if(currentCase === 'Camel Case'){
//   input = input.join(' ');
//   for(let el of input){
//     let first = el.slice(0, 1);
//     let rest = el.substring(1);
//     let word = first.toLowerCase() + rest;
//     res.push(word);
//   }
// }

// console.log(input);

// debugger;



// */