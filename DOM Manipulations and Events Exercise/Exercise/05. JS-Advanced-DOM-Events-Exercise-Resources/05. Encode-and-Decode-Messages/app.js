function encodeAndDecodeMessages() {
   
    let buttons = Array.from(document.querySelectorAll('button'));

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);
    
    function encode(e){
        let newMsg = "";
        let textAreas = document.querySelectorAll('textarea');
        let currentText = textAreas[0].value;
        
        for(let i = 0; i < currentText.length; i++){
        
            let charNum = currentText[i].charCodeAt();
            newMsg += String.fromCharCode(charNum + 1);
        }
        let currentTextArea = textAreas[0];
        currentTextArea.value = '';
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;
      
    }

    function decode(e){
        let currentArea = e.target.parentElement.children[1];
        let text = currentArea.value;
        let resultMsg = "";
        for(let k = 0; k < text.length; k++){
            let ch = text[k].charCodeAt();
            resultMsg += String.fromCharCode(ch - 1);
        }
        currentArea.value = resultMsg;
    }

}