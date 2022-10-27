function deleteByEmail() {
    
let input = document.getElementsByName('email')[0].value;
let res = document.getElementById('result');

//let div = document.createElement('div');
let data = document
.getElementById('customers')
.getElementsByTagName('td');

//could be done with document.querySelectorAll('#customers td:nth-child(2)')

for (let el of data){
    if(el.textContent === input){
        el.parentElement.remove();
        res.textContent = 'Deleted';
        //document.getElementsByName('email')[0].value = '';
    } else {
        res.textContent = 'Not found.'
        //document.getElementsByName('email')[0].value = '';
    } 
}

}