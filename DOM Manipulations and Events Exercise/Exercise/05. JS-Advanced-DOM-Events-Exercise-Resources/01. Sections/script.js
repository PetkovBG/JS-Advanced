function create(words) {

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      let targetDiv = document.getElementById('content');
      div.appendChild(p);
      targetDiv.appendChild(div)
   
      div.addEventListener('click', display);

   }
   function display(event) {
      if(event.target.nodeName === 'P'){
         return;
      }
      let element = event.target.children[0];
      element.style.display = 'block';
    }
}

// The solution below revealed the target sections but Judge did not accept it
// for (let word of words) {
//    let div = document.createElement('div');
//    let p = document.createElement('p');


//    div.addEventListener('click', display);
//    let targetDiv = document.getElementById('content');
//    targetDiv.appendChild(div)
   

//    function display(event) {
//       p.textContent = word;
//       div.appendChild(p);
//    }

// }