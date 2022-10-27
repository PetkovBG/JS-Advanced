function addItem() {
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = input;
    let ul = document.getElementById('items');
    let res = ul.appendChild(li);
    document.getElementById('newItemText').value = ''; //this clears the input field

}