function solve(){

    let testText = 'my string'

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)){
            return str.concat(' ', this);
        } else{
            return this;
        }
    };
    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this.concat(' ', str);
        } else{
            return this;
        }
    };
    String.prototype.isEmpty = function () {
        if(this.length === 0){
            return true;
        } else{
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        if(this.length < n){
            return this;
        } else{
            let strL = this.length;
            let splitted = this.split(' ');
            if (splitted.length > 1){
                splitted[splitted.length - 1] = '...'
            } else {
                let length = this.length;
                if(n < 4){
                  
                }
            }
            
            return splitted.join('');
        }   
    };
    String.prototype.format = function (string, ...params){

    }
    console.log(testText.ensureStart('my'));
    console.log(testText.ensureStart('hello'));
    //console.log(testText.ensureEnd('string'));
    console.log(testText.isEmpty());
    console.log(testText);
    console.log(testText.truncate(6));


}
solve();