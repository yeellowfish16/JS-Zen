document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = multipleTable(document.getElementById('result'));
    document.getElementById('result').appendChild(newElem);
};

// function multipleTable() {
//     var string = '';
//
//     for (var i = 1; i <= 9; i++) {
//         for (var j = 1; j <= 9; j++) {
//             string += i + '*' + j + '=' + (i * j) + '</br>';
//         }
//     }
//     return string;
// }

function multipleTable() {
    document.write("<table>");
    document.write("<tr><td> </td>");
    for (i = 1; i <= 10; i++) document.write("<td>" + i + " </td>");
    document.write("</tr>");
    for (i = 1; i <= 10; i++) {
        document.write("<tr><td>" + i + " </td>");
        for (j = 1; j <= 10; j++) {
            document.write("<td bgcolor='#f5f5f5'>" + (i * j) + " </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

