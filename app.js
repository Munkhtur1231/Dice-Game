// Togloom duussan esehiig hadgalah tuluviin huvisagch
var isGameOver;

// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gene
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore;

var diceDom = document.querySelector(".dice");

// Program ehlehed beltgeh
reset();

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    // 1-6 dotorh sanamsargui too gargana
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // Buusan too 1 ees ylgaatai bol onoog nemegduulne
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      eeljSolih();
    }
  } else {
    alert("Тоглоом дууссан, шинээр эхлүүлнэ үү.");
  }
});

// hold tovchiig darahad roundscore score-t orj eelj soligdono
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Ylaltiig shalgana
    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tuluvt oruulna
      isGameOver = true;

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      diceDom.style.display = "none";
    } else {
      eeljSolih();
    }
  } else {
    alert("Тоглоом дууссан, шинээр эхлүүлнэ үү.");
  }
});

// shineer ehleh tovch
document.querySelector(".btn-new").addEventListener("click", reset);

// toglogchiin eeljiig solih
function eeljSolih() {
  diceDom.style.display = "none";
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);

  // Tuhain elemented 'active' class baival ustgana, baihgui bol nemne
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// buh zuiliig 0 bolgono
function reset() {
  // Togloom ehellee gedeg tuluvt oruulna
  isGameOver = false;

  diceDom.style.display = "none";
  scores[0] = 0;
  scores[1] = 0;
  roundScore = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document
    .querySelector(".player-0-panel")
    .classList.remove("winner", "active");
  document
    .querySelector(".player-1-panel")
    .classList.remove("winner", "active");

  document.querySelector(".player-0-panel").classList.add("active");
}
