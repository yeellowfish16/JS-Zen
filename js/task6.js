//Вырезание подстроки по заданному шаблону из введенной строки
// @param incomingString (string) - строка, из которой нужно вырезать подстроку
// @param template (object) - шаблон

function cutString (incomingString, template) {
	var arr = incomingString.match(template);
	return String(arr[0]).toLowerCase();
}

document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p');
	newElem.innerHTML = cutString(document.getElementById('input').value, /([w]{3}\.)?([\w-]{1,}\.)?[\w-]{1,}\.[a-z]{2,6}/ig);
	document.getElementById('result').appendChild(newElem);
};