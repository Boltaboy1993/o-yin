const balanse: HTMLElement = document.querySelector('#balanse')!
const play: HTMLElement    = document.querySelector('#play')!
const bet: HTMLInputElement     = document.querySelector('#bet')!

const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card')



let cash = 100
let counter = 0



balanse.innerHTML = `Balanse: $${cash}`



// onclick larni uladik
cards.forEach(card => {
  card.onclick = () => {
    if (card.classList.contains('is-flipped')) {
      return
    }
    if (counter < 3) {
      card.classList.add('is-flipped')
      counter++

      let number = card.querySelector('.number')!
      if (number.innerHTML === '$') {
        setTimeout(() => {
          alert('yutding!')
        }, 1000);
        counter = 4
      }
    }
  }
})

// x ga aylantirish
cards.forEach(card =>{
  let number = card.querySelector('.number')!
  number.innerHTML = 'X'
})

// random card olib unga $ berish
let r = random(0,8)
console.log(r);
let card = cards[r]
let number = card.querySelector('.number')!
number.innerHTML = '$'



function random(min:number, max:number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
