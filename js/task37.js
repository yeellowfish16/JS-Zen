var letters = ['a', 'b', 'c'],
    numbers = [1, 2, 3],
    newArr = letters.concat(numbers);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newArr;
    document.getElementById('result').appendChild(newElem);
};
