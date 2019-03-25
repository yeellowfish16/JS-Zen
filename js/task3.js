document.getElementById('check').onclick = function() {
	alert('В сутках ' + calculateSecInDay(1) + ' секунд');
	alert('В неделе ' + calculateSecInWeek(1) + ' секунд');
	alert('В 30-дневном месяце ' + calculateSecInMonth(1) + ' секунд');
	alert('В невисокосном годе ' + calculateSecInYear(1) + ' секунд');
};

// Функция, считающая количество секунд в часе
// @param numHours - количество часов, в которых нужно посчитать секунды

function calculateSecInHour (numHours) {
	return 60*60*numHours;
}

// Функция, считающая количество секунд в сутках
// @param numDays - количество суток, в которых нужно посчитать секунды

function calculateSecInDay (numDays) {
	return calculateSecInHour(1)*24*numDays;
}

// Функция, считающая количество секунд в неделе
// @param numWeek - количество недель, в которых нужно посчитать секунды

function calculateSecInWeek (numWeek) {
	return calculateSecInDay(1)*7*numWeek;
}

// Функция, считающая количество секунд в месяце
// @param numMonth - количество месяцев, в которых нужно посчитать секунды

function calculateSecInMonth (numMonth) {
	return calculateSecInDay(1)*30*numMonth;
}

// Функция, считающая количество секунд в годе
// @param numYear - количество годов, в которых нужно посчитать секунды

function calculateSecInYear (numYear) {
	return calculateSecInDay(1)*365*numYear;
}
