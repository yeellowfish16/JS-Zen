var date = '2025-12-31',
    dateArr = date.split('-'),
    // Используем функцию переворачивания массива из задачи 13
    newDateArr = reverseArray(dateArr),
    newDate = newDateArr.join('/');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newDate;
    document.getElementById('result').appendChild(newElem);
};
