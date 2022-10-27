function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick () {
     let input = JSON.parse(document.querySelector('#inputs textarea').value); //or document.getElementById('inputs'),children[1];
   let bestRestInfo = document.querySelector('#bestRestaurant p');
   let bestWorkers = document.querySelector('#workers p');

     for(let data of input){
      let [name, workerList] = data.split(' - ');
      if(!result.find(e => e.name === name)){
         result.push({
            name,
            avgSalary: 0,
            bestSalary: 0,
            sumSalary: 0,
            workerList: []
         });
      }
         let currentRestaurant = result.find(e => e.name === name);
         workerList = workerList.split(', ');

         for(let currentWorker of workerList){
            updateRestaurant(currentRestaurant, currentWorker)
         }
     }
let bestRestaurant = result.sort((a,b) => b.avgSalary - a.avgSalary)[0];
bestRestInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
let sortedWorkerList = bestRestaurant.workerList.sort((a, b) => b.salary - a.salary);
let buff = '';
for(let worker of sortedWorkerList){
   buff += `Name: ${worker.name} With Salary: ${worker.salary} `
}
bestWorkers.textContent = buff;

   }
   function updateRestaurant(obj, worker){
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      obj.sumSalary += salary;
      if(obj.bestSalary < salary){
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary
      });
      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}


// //** Option for possible solution below */
// for(let data of input){
//    let [name, staff] = data.split(' - ');
//    let [staffName, salary] = staff.split(' ');
//    obj[name] = {};
//    obj[name][staffName] = Number(salary);
//    test
   

//  }

//  for (let [restaurant, staffData] of Object.entries(obj)) {
//    for (let [person, sal] of Object.entries(staffData)) {
//        console.log(`${restaurant} -> ${person} (${sal})`);
//    }
// }
// debugger;