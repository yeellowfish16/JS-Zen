document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = multipleTable();
    document.getElementById('result').appendChild(newElem);
};

function multipleTable() {
    var string = '';

    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            string += i + '*' + j + '=' + (i * j) + '</br>';
        }
    }
    return string;
}

