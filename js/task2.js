document.getElementById('check').onclick = function() {
	calculateSecInHour(1);
};

// Функция, считающая количество секунд в часе
// @param numHours - количество часов, в которых нужно посчитать секунды

function calculateSecInHour (numHours) {
	alert(60*60*numHours);
}
