var string = 'Бык жевал траву';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '<div class="animal"><em>' + string.substr(0,3) + '</em> курил <blockquote>трубку мира</blockquote> с индейцами майя <a href=”https://london.xyz”><span>в Амстердаме</span></a></div>';
    document.getElementById('result').appendChild(newElem);
};
