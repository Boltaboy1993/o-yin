"use strict";
const balanse = document.querySelector('#balanse');
const play = document.querySelector('#play');
const bet = document.querySelector('#bet');
const cards = document.querySelectorAll('.card');
let cash = 100;
let counter = 0;
balanse.innerHTML = `Balanse: $${cash}`;
// onclick larni uladik
cards.forEach(card => {
    card.onclick = () => {
        if (card.classList.contains('is-flipped')) {
            return;
        }
        if (counter < 3) {
            card.classList.add('is-flipped');
            counter++;
            let number = card.querySelector('.number');
            if (number.innerHTML === '$') {
                setTimeout(() => {
                    alert('yutding!');
                }, 1000);
                counter = 4;
            }
        }
    };
});
// x ga aylantirish
cards.forEach(card => {
    let number = card.querySelector('.number');
    number.innerHTML = 'X';
});
// random card olib unga $ berish
let r = random(0, 8);
console.log(r);
let card = cards[r];
let number = card.querySelector('.number');
number.innerHTML = '$';
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
