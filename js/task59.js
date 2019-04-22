var str = '';

for (var i=1; i <= 9; i++) {
    str += i;
}

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = str;
    document.getElementById('result').appendChild(newElem);
};
