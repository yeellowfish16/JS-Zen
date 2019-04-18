var arr = [3, 4, 1, 2, 7];
arr.sort();

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = arr;
    document.getElementById('result').appendChild(newElem);
};
