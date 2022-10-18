function solve(commands){

    let count = 1; 

    const parser = {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        reset(){
            count = 1;
        }
    };

    for(let command of commands){
        parser[command]();
    }
    console.log(count);

}
solve(['increment', 'decrement', 'reset', 'increment', 'increment']);