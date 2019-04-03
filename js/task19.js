var poem1 = ['Однажды в студеную зимнюю пору', 'Я из лесу вышел – был сильный мороз.', 'Гляжу, поднимается медленно в гору', 'Лошадка, везущая хвороста воз'],
    poem2 = ['Сижу за решеткой в темнице сырой', 'Вскормленный в неволе орел молодой.', 'Мой грустный товарищ, махая крылом,', 'Кровавую пищу клюет под окном'];

document.getElementById('check').onclick = function () {
    for (var i=0; i < createNewPoem(poem1,poem2).length; i++) {
        var newElem = document.createElement('p');
	    newElem.innerHTML = '<p> ' + createNewPoem(poem1,poem2)[i] + '</p>';
	    document.getElementById('result').appendChild(newElem);
    }
};

// Создаем новое стихотворение из строчек двух других
// @param arrPoem1, arrPoem2 - стихотворения, из котороых надо взять строки (каждая строка - элемент массива)

function createNewPoem(arrPoem1, arrPoem2) {
    var newPoem = [];
    for (var i=0; i < arrPoem1.length; i++) {
        // Используем функцию isEven из задачи №11
        if (isEven(i)) {
            newPoem.push(arrPoem1[i]);
        }

        else {
            newPoem.push(arrPoem2[i]);
        }
    }

    return newPoem;
}
