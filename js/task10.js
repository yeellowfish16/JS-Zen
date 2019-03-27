document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p');
	newElem.innerHTML = compare(document.getElementById('input1').value, document.getElementById('input2').value);
	document.getElementById('result').appendChild(newElem);
};

// Сравниваем аргументы функции
// @param strArg1 - число 1
// @param strArg2 - число 2

function compare(strArg1, strArg2) {
	if (parseInt(strArg1) > parseInt(strArg2)) {
		return 'Число ' + strArg2 + ' меньше';
	}

	else if (parseInt(strArg2) > parseInt(strArg1)) {
		return 'Число ' + strArg1 + ' меньше';
	}

	else {
		return 'Похоже, что числа равны';
	}
}
