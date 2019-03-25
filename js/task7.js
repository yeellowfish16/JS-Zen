document.getElementById('check').onclick = function() {
	alert(calculateFactorial(document.getElementById('input').value));
};

// Вычисление факториала числа
// @param incomingString (string) - строка, из которой нужно вырезать число, факториал которого мы высчитываем

function calculateFactorial (incomingString) {
  if (incomingString) {
  	return incomingString * calculateFactorial(incomingString - 1);
  }

  else {
  	return 1;
  }
}
