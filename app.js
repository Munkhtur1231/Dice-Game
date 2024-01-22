// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gene
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 gesen utgatai sanamsargui uusgene.


// Program ehlehed beltgeh
reset();

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1-6 dotorh sanamsargui too gargana
    var diceNumber = Math.floor(Math.random()*6) + 1;

    // Shoonii zurgiig web deer gargaj irne
    diceDom.style.display = 'block';

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom .src = 'dice-' + diceNumber + '.png';

    // Buusan too 1 ees ylgaatai bol onoog nemegduulne
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        eeljSolih();
    }
});

// hold tovchiig darahad roundscore score-t orj eelj soligdono
document.querySelector(".btn-hold").addEventListener('click', function() {
    scores[activePlayer] += roundScore;

    // Ylaltiig shalgana
    if (scores[activePlayer] >= 100)
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

    eeljSolih();
});

// shineer ehleh tovch
document.querySelector(".btn-new").addEventListener('click', reset);

// toglogchiin eeljiig solih
function eeljSolih() {
    diceDom.style.display = 'none';
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;

    // Tuhain elemented 'active' class baival ustgana, baihgui bol nemne
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


// buh zuiliig 0 bolgono
function reset() {
    scores[0] = 0;
    scores[1] = 0;
    roundScore = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
