document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p'),
        // Используем функцию из задачи №12 для создания массива
        newArray = range(document.getElementById('input1').value, document.getElementById('input2').value, document.getElementById('input3').value),
        arraySum = sum(newArray);

	newElem.innerHTML = '<p> Новый массив: ' + newArray + '. Сумма элементов этого массива: ' + arraySum + '.</p>';
	document.getElementById('result').appendChild(newElem);
};

// Переворачиваем массив, выдаем новый массив
//@param arrArray - массив, который надо перевернуть

function reverseArray(arrArray) {
    newArray = [];

    for ()
}
