

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

const $show = $('.hide');
const $content = $('.show');
const popup = document.getElementById("pop-up");
const btnClose = document.getElementById("btn-close");
const winerGame = document.querySelector('#winer');

let tatalofPlayer = 0;
let tatalOfComputer = 0;
let rollCount = 0;



btnClose.addEventListener('click', function () {
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
})




// Starting conditions
const init = () => {

    tatalofPlayer = 0;
    tatalOfComputer = 0;
    rollCount = 1;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

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
    if (rollCount <= 3) {
        rollCount++
        console.log(rollCount);


        let dic1, dic2, dic3, dic4;
        // 2. Display dices

        diceEl_1.src = `img/dice-${dic1 = dice()}.png`;

        diceEl_2.src = `img/dice-${dic2 = dice()}.png`;

        diceEl_3.src = `img/dice-${dic3 = dice()}.png`;

        diceEl_4.src = `img/dice-${dic4 = dice()}.png`;

        // chackForOne(b, c);
        // chackSame(b, c);
        // chackForOne(d, e);
        // chackSame(d, e);


        // 3. Check for rolled 1

        if (dic1 == 1 || dic2 == 1) {
            dic2 = 0;
            dic1 = 0;
        }

        if (dic3 == 1 || dic4 == 1) {
            dic3 = 0;
            dic4 = 0;
        }

        if (dic1 == dic2) {
            dic1 = (dic1 + dic1) * 2;
            dic2 = 0;
        }

        if (dic3 == dic4) {
            dic3 = (dic3 + dic4) * 2;
            dic4 = 0;
        }

        current0El.textContent = `${dic1 + dic2}`;
        current1El.textContent = `${dic3 + dic4}`;


        tatalofPlayer += dic1 + dic2;
        tatalOfComputer += dic3 + dic4;

        score0El.textContent = tatalofPlayer;
        score1El.textContent = tatalOfComputer;

    } else {
        if (tatalofPlayer > tatalOfComputer) {

            winerGame.innerHTML = ` Player  is WON.&#129351;  Congratulation. <br/>
        Totale scores are: ${tatalofPlayer} `
            popUp()

        } else {
            winerGame.innerHTML = `  Computer is WON.&#129351; Congratulation.<br/>
        Totale scores are: ${tatalOfComputer} `
            popUp()
        }

    }
});

const popUp = () => {
    //   popup.style.pointerEvents = "all";
    popup.style.opacity = "9";

    popup.style.zIndex = '1000';
    init();

}

//Show the Information about Games
$content.hide();

// Accordion
$show.click(function () {
    /*
    if the user is clicking the tab for 
    content that is alraedy visible, slide it up
    */
    if ($(this).next().is(':visible')) {
        $(this).next().slideUp();
    } else {
        //otherwise, close all content
        $content.slideUp();
        //and open the chosen content
        $(this).next().slideDown();
    }
});


btnNew.addEventListener('click', init);
