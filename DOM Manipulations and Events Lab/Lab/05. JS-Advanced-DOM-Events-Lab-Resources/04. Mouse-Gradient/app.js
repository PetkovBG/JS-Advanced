function attachGradientEvents() {
        let gradient = document.getElementById('gradient');
        gradient.addEventListener('mousemove', gradientMove);
        gradient.addEventListener('mouseout', gradientOut);
        function gradientMove(event) {
          let power = event.offsetX / (event.target.clientWidth - 1);
          power = Math.trunc(power * 100);
          document.getElementById('result').textContent = power + "%";
        }
        function gradientOut(event) {
          document.getElementById('result').textContent = "";
        }
}


//*The solution below did not work//
// let target = document.getElementById('gradient');
// target.addEventListener('mousemove', function (event) {
//     let position = event.offsetX;
//     let targetWidth = event.target.offsetWidth;
//     console.log(event.target);
//     console.log(targetWidth);

//     let result = Math.trunc(position / targetWidth * 100);
//     console.log(typeof result);
//     console.log(result);
//     let div = document.getElementById('result');
//     div.textContent = `${result}%`;
//     //document.getElementById('result').textContent = result;
// })
