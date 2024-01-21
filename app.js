// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gene
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 gesen utgatai sanamsargui uusgene.
var dice = Math.floor(Math.random()*6) + 1;

// Program ehlehed beltgeh
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';

if (dice === 1) 
    window.document.querySelector('.dice').outerHTML = '<img src="dice-1.png" alt="Dice" class="dice" />';
if (dice === 2) 
    window.document.querySelector('.dice').outerHTML = '<img src="dice-2.png" alt="Dice" class="dice" />';
if (dice === 3)
    window.document.querySelector('.dice').outerHTML = '<img src="dice-3.png" alt="Dice" class="dice" />';
if (dice === 4) 
    window.document.querySelector('.dice').outerHTML = '<img src="dice-4.png" alt="Dice" class="dice" />';
if (dice === 5) 
    window.document.querySelector('.dice').outerHTML = '<img src="dice-5.png" alt="Dice" class="dice" />';
if (dice === 6) 
    window.document.querySelector('.dice').outerHTML = '<img src="dice-6.png" alt="Dice" class="dice" />';