function addItem() {
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = input;
    let ul = document.getElementById('items');
    let res = ul.appendChild(li);
    document.getElementById('newItemText').value = ''; //this clears the input field

   let deleteBtn = document.createElement('a');
   let linkText = document.createTextNode('[Delete]'); //deleteBtn.textContent = ('[Delete]');
   deleteBtn.appendChild(linkText);
   deleteBtn.href = '#';
   deleteBtn.addEventListener('click', deleteItem);

   li.appendChild(deleteBtn);
   ul.appendChild(li);

   function deleteItem(){
    li.remove();
   }
}