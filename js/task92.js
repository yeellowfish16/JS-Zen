var a = 1,
    b = 6,
    c = Math.abs(a-b);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = c;
    document.getElementById('result').appendChild(newElem);
};
