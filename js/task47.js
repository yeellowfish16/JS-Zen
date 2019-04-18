var string = '123456',
    arr = string.split('');

arr.reverse();

string = arr.join('');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = string;
    document.getElementById('result').appendChild(newElem);
};
