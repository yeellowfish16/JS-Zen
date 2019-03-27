document.getElementById('check').onclick = function() {
	alert(isEven(document.getElementById('input').value));
};

// Проверяем четность числа
// @param strNumber - число

function isEven(strNumber) {
    var num = parseInt(strNumber);

    if (num == 0) {
        return true;
    }
    else if (num == 1) {
        return false;
    }
    else if (num < 0) {
        return isEven(-num);
    }
    else  {
        return isEven(num - 2);
    }
}
