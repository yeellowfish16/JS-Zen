document.getElementById('check').onclick = function () {
    drawTable();
};

function drawTable() {
    var firstNum = 1;

    document.write('<table>');

    for (var row = 0; row < 10; row++) {
        document.write('<tr>');

        for (var cell = 0; cell < 10; cell++) {
            document.write('<td style="background-color: #f5f5f5">' + firstNum++ + '</td>');
        }

        document.write('</tr>');
    }

    document.write('</table>');
}
