document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p'),
        newArray = range(document.getElementById('input1').value, document.getElementById('input2').value, document.getElementById('input3').value),
        arraySum = sum(newArray);

	newElem.innerHTML = '<p> Новый массив: ' + newArray + '. Сумма элементов этого массива: ' + arraySum + '.</p>';
	document.getElementById('result').appendChild(newElem);
};

// Создаем массив
// @param strNumber1 - число 1
// @param strNumber2 - число 1
// @param strStep - шаг

function range(strNumber1, strNumber2, strStep) {
    var arr = [],
        num1 = parseInt(strNumber1),
        num2 = parseInt(strNumber2),
        step = parseInt(strStep);

    if (!step) {
        step = 1;
    }

    if (step > 0) {
        if (num1 < num2) {
            for (var i = num1; i <= num2; i += step) {
                arr.push(i);
            }
        }

        else if (num2 < num1) {
            for (var i = num2; i <= num1; i +=step) {
                arr.push(i);
            }
        }

        else if (num2 = num1) {
            arr.push(num1);
        }
    }

    else {
        if (num1 < num2) {
            for (var i = num2; i >= num1; i += step) {
                arr.push(i);
            }
        }

        else if (num2 < num1) {
            for (var i = num1; i >= num2; i +=step) {
                arr.push(i);
            }
        }

        else if (num2 = num1) {
            arr.push(num1);
        }
    }

    return arr;
}

// Считаем сумму элементов массива
// @param arrArray - масив чисел

function sum(arrArray) {
    var sum = 0;

    for (i = 0; i < arrArray.length; i++) {
        sum += arrArray[i];
    }

    return sum;
}
