function solve(){

let student = {
    name: 'Orlin',
    major: 'JS Advanced'
};

function print(){
    console.log(this.name + ' ' + this.major);
}
print();

student.print = print;

student.print();

}
solve();