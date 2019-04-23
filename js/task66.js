var array = [1, 2, 4, 7, 5, 3];

document.getElementById('check').onclick = function () {
    showElements(array);
};

// Функция, последовательно выводящая на экран элементы массива

function showElements(array) {
    alert(array.shift());

    if (array.length != 0){
        showElements(array);
    }
}
