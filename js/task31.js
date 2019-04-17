var string = 'я учу javascript!',
    stringLength = string.length;

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Длина строки: ' + stringLength + ' символов.';
    document.getElementById('result').appendChild(newElem);
};
