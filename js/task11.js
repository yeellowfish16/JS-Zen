document.getElementById('check').onclick = function() {
	alert(isEven(document.getElementById('input').value));
};

// Проверяем четность числа
// @param strNumber - число

function isEven(strNumber) {
    var num = parseInt(strNumber),
        isNumberEven = false

    if (num == 0) {
        isNumberEven = true;
    }
    else if (num == 1) {
        isNumberEven = false;
    }
    else if (num < 0) {
        isNumberEven = isEven(-num);
    }
    else  {
        isNumberEven = isEven(num - 2);
    }

    return isNumberEven;
}
