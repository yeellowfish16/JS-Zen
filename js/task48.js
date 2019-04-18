var number = 3751,
    string = String(number),
    arr = string.split('');

arr.sort();

string = arr.join('');
number = Number(string);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = number;
    document.getElementById('result').appendChild(newElem);
};
