var st = Math.pow(2, 10);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '2 в 10-й степени  - это ' + st + '.';
    document.getElementById('result').appendChild(newElem);
};
