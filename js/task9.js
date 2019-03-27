var arr = [];

for (var i = 1; i <= 100; i++) {
	arr.push(i);
}

for (var j = 0; j < arr.length; j++) {
	if (arr[j] % 3 == 0 && arr[j] % 5 == 0) {
		arr[j] = 'FizzBuzz'
	}

	else if (arr[j] % 3 == 0) {
		arr[j] = 'Fizz'
	}

	else if (arr[j] % 5 == 0) {
		arr[j] = 'Buzz'
	}
}

document.getElementById('check').onclick = function() {
	console.log(arr);
};
