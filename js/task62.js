var arr = [[1, 2, 3], [4, 5], [6]];

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = sumArrayElements(arr);
    document.getElementById('result').appendChild(newElem);
};

//Функция, считающая сумму элементов двумерного массива
//@param array - массив, сумму элементов которого надо посчитать

function sumArrayElements(array) {
    var newArray = [],
        result = 0;

    for (var i = 0; i < array.length; i++) {
        newArray = array[i];

        for (var j = 0; j < newArray.length; j++) {
            result += newArray[j];
        }
    }

    return result;
}
