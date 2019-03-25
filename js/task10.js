// Разбивам текст на слова и считаем количество каждого слова
// @param text (string) - введенный текст

function countEveryWordInText(text) {
	var i = 0,
		template = /[а-яА-ЯёЁa-zA-Z]+/g,
		arr = text.match(template),
		countResult = [],
		newElem = '';
	
	return text.replace(template, function(){
		console.log(arr[i]);
		i++;
		// return function(){
			
			// for (var i = 0; i < arr.length; i++) {
			// 	var a = arr[i];
				
			// 	if (countResult[a] != undefined) {
			// 		++ countResult[a];
			// 	}
				
			// 	else {
			// 		countResult[a] = 1;
			// 	}
			// }
		// };
	});
	
	// newElem = document.createElement('p');
	// newElem.innerHTML = 'Слово \"' + word + '\" встречается ' + countResult[word] + ' раз(а)';
	// document.getElementById('result').appendChild(newElem);

}

document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p');
	newElem.innerHTML = countEveryWordInText(document.getElementById('input').value);
	document.getElementById('result').appendChild(newElem);
};