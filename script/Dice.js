'use strict';

// Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl_1 = document.querySelector('.diceMe');
const diceEl_2 = document.querySelector('.diceMe2');
const diceEl_3 = document.querySelector('.diceCom');
const diceEl_4 = document.querySelector('.diceCom2');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');

const popup = document.getElementById("pop-up");
const btnClose = document.getElementById("btn-close");
const winerGame = document.querySelector('#winer');

let tatal = 0;
let tatal2 = 0;
let rollCount = 0;


btnClose.addEventListener('click', function () {
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
})


// Starting conditions
const init = () => {

    tatal = 0;
    tatal2 = 0;
    rollCount = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    //diceEl_1.html = `<p>🎲</p>`;
    diceEl_1.src = "img/dice.jpg";
    diceEl_2.src = "img/dice.jpg";
    diceEl_3.src = "img/dice.jpg";
    diceEl_4.src = "img/dice.jpg";

};
init();
const chackSame = function (number, secondNumber) {
    if (number == secondNumber) {
        number = (Number + secondNumber) * 2;
        secondNumber = 0;
    }
    return number, secondNumber;
}


const chackForOne = function (number, secondNumber) {
    if (number == 1 || secondNumber == 1) {
        number = 0;
        secondNumber = 0;
    }
    return number, secondNumber;
}

const dice = () => {
    return Math.floor(Math.random() * 6) + 1;

}

// Rolling dice functionality


btnRoll.addEventListener('click', function () {
    if (rollCount < 3) {
        rollCount++
        console.log(rollCount);
        // 1. Generating a random dice roll

        let b, c, d, e;
        // 2. Display dices

        diceEl_1.src = `img/dice-${b = dice()}.png`;

        diceEl_2.src = `img/dice-${c = dice()}.png`;

        diceEl_3.src = `img/dice-${d = dice()}.png`;

        diceEl_4.src = `img/dice-${e = dice()}.png`;

        // chackForOne(b, c);
        // chackSame(b, c);
        // chackForOne(d, e);
        // chackSame(d, e);



        // 3. Check for rolled 1
        // 3. Check for rolled 1

        if (b == 1 || c == 1) {
            c = 0;
            b = 0;
        }

        if (d == 1 || e == 1) {
            d = 0;
            e = 0;
        }



        if (b == c) {
            b = (b + b) * 2;
            c = 0;
        }
        if (d == e) {
            d = (d + e) * 2;
            e = 0;
        }

        score0El.textContent = `${b + c}`;
        score1El.textContent = `${d + e}`;


        tatal += b + c;
        tatal2 += d + e;

        current0El.textContent = tatal;
        current1El.textContent = tatal2;

    } else {
        if (tatal > tatal2) {

            winerGame.textContent = `  Player  is WON. * * * Congratulations * * *  .
            Totale scores are : ${tatal} `
            popUp()

        } else {
            winerGame.textContent = `  Computer is WON.  * * * Congratulations * * *  .
            Totale scores are : ${tatal2} `
            popUp()
        }

    }
});

const popUp = () => {
    popup.style.pointerEvents = "all";
    popup.style.opacity = "9";
}



btnNew.addEventListener('click', init);
