var barcelona = {
    name: 'Барселона',
    citizens: 4840
},
    amsterdam = {
    name: 'Амстердам',
    citizens: 825
},
    berlin = {
    name: 'Берлин',
    citizens: 3611
},
    saintPetersburg = {
    name: 'Санкт-Петербург',
    citizens: 5383
},
    irkutsk = {
    name: 'Иркутск',
    citizens: 624
},
    sanFrancisco = {
    name: 'Сан-Франциско',
    citizens: 884
},
    tokio = {
    name: 'Токио',
    citizens: 38050
},
    newYork = {
    name: 'Нью-Йорк',
    citizens: 21575
};

var cities = [barcelona, amsterdam, berlin, saintPetersburg, irkutsk, sanFrancisco, tokio, newYork];
cities.sort(sortCitiesByCitizens);

document.getElementById('check').onclick = function() {
    for (var i=0; i <= cities.length - 1; i++) {
         var newElem = document.createElement('p');
	    newElem.innerHTML = '<p> ' + cities[i].name + '. Население (в тыс.): ' + cities[i].citizens + '</p>';
	    document.getElementById('result').appendChild(newElem);
    }
}

function sortCitiesByCitizens(city1, city2) {
    return city2.citizens - city1.citizens;
}

