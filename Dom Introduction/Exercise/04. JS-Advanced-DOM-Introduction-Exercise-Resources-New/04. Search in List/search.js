function search() {
  let townList =  Array.from(document.querySelectorAll('ul li'));

   let searchText = document.getElementById('searchText').value;

   let counter = 0;

 for(let i = 0; i < townList.length; i++){
   let currentTown = townList[i].textContent;
   if(currentTown.includes(searchText)){
      counter++;
      townList[i].style.textDecoration = 'underline';
      townList[i].style.fontWeight = 'bold';
   } else{
      townList[i].style.textDecoration = 'none';
      townList[i].style.fontWeight = 'normal';
   }
 }
 document.getElementById('result').textContent = `${counter} matches found`
}
