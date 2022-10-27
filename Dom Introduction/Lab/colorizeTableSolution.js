function colorizeRows() {

    let tableRows = document.querySelectorAll('table tr');

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 === 1) {
            tableRows[i].style.backgroundColor = 'teal';
        }

    }
}
colorizeRows();


//*Alternative solution*//
// function colorizeRows() {
//     let rows = document.
//       querySelectorAll("table tr");
//     let index = 0;
//     for (let row of rows) {
//       index++;
//       if (index % 2 == 0)
//         row.style.background = "teal";
//     }
//   }
  