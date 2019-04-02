document.getElementById('check').onclick = function() {
	var newElem = document.createElement('p'),
        // Используем функцию из задачи №12 для создания массива
        newArray = range(document.getElementById('input1').value, document.getElementById('input2').value, document.getElementById('input3').value);
		reverse = reverseArray(newArray);
		reverseInPlace = reverseArrayInPlace(newArray);

	document.getElementById('result').innerHTML = '';
	newElem.innerHTML = '<p> Перевернутый новый массив: ' + reverse + '.</p>';
	document.getElementById('result').appendChild(newElem);
};

// Переворачиваем массив и получившееся переносим в новый массив
// @param arrArray - массив, который надо перевернуть

function reverseArray(arrArray) {
	var newArray = [];
	for (var i = arrArray.length - 1; i >= 0; i--) {
		newArray.push(arrArray[i]);
	}
	return newArray;
}

// Переворачиваем массив
// @param arrArray - массив, который надо перевернуть

function reverseArrayInPlace(arrArray) {
    for (var i = 0; i < Math.floor(arrArray.length / 2); i++) {
    	var array = arrArray[i];
        arrArray[i] = arrArray[arrArray.length - 1 - i];
        array = arrArray[arrArray.length - 1 - i]; // и каждый раз записываем все в переменную
    }
    return arrArray;
}

