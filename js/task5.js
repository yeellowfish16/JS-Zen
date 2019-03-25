var boolean = true;

document.getElementById('block').onclick = function() {
	this.remove();
}

document.getElementById('check').onclick = function() {
	if (document.getElementById('block') == undefined) {
		boolean = false;
	}
	alert('Сейчас значение переменной ' + boolean);
}
