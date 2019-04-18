var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(arr.length - 1, 0, 'c');
arr.splice(arr.length, 0, 'e');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = arr;
    document.getElementById('result').appendChild(newElem);
};
