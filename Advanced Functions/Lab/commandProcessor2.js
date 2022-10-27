function solve(){

let content = '';

return {
    append: (s) => content += s,
    removeStart: (n) => content = content.substring(n),
    removeEnd: (n) => content = content.substring(0, content.length - n),
    print: () => console.log(content)

};

}
let commander = solve();
commander.append('Orlin');
commander.append('Petkov')
commander.removeStart(2);
commander.removeEnd(3);
commander.print();
