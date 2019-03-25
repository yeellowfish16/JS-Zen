var str = 'abcde';

document.getElementById('check').onclick = function() {
	alert(str[0]);
	alert(str[1]);
	alert(str[str.length - 1]);
}
