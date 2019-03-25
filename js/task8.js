// Зеркальная перестановка символов в строке относительно любого символа 
// @param string (string) - введенный текст
// @param symbol (string) - относительно какого символа меняем местами

function replaceSymbols(string, symbol) {
	var i = 0,
		arr = string.match(/[\s\S]/g);
	arr = arr.reverse();

	if (string.indexOf(symbol) === -1) {
		return 'В введенной Вами строки нет символа "' + symbol + '"';
	}
	return string.replace(/[\s\S]/g, function () {
		return String(arr[i++]);
	}); 
}

document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p');
	newElem.innerHTML = replaceSymbols(document.getElementById('input').value, '@');
	document.getElementById('result').appendChild(newElem);
};