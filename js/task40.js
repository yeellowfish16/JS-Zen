var arr = [1, 2, 3];
arr.unshift(4, 5, 6);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = arr;
    document.getElementById('result').appendChild(newElem);
};
