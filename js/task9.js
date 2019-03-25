// Проверка соответствия введенной строки шаблону
// @param string (string) - введенная строка
// @param template (object) - регулярное выражение-шаблон

function checkStringForTemplate (string, template) {
	return template.test(string);
}

document.getElementById('check').onclick = function() {
	alert(checkStringForTemplate(document.getElementById('input').value, /(https?:\/\/([w]{3}\.)?([\w-]{1,}\.){0,}[\w-]{1,}\.[a-z]{2,6}\/?([\w_-]+\/?)*)/ig));
};