function extractText(){

    let listItems = document.querySelectorAll('ul li');

    let textArea = document.getElementById('result');

    for(let listItem of listItems){
        textArea.value += listItem.textContent + '\n';
    }

}
extractText();