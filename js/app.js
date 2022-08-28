/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const grid = document.querySelector('.grid-div')
const resultDisplay = document.querySelector('#result-span')

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

/*----------------------------- Event Listeners -----------------------------*/

// add cards of monsters
document.addEventListener('DOMContentLoaded', () => {
  const cards = [
    {
      name: 'hungry',
      img: 'images/monsters/hungry.png'
    },
    {
      name: 'hungry',
      img: 'images/monsters/hungry.png'
    },
    {
      name: 'horn',
      img: 'images/monsters/horn.png'
    },
    {
      name: 'horn',
      img: 'images/monsters/horn.png'
    },
    {
      name: 'eyemonster',
      img: 'images/monsters/eyemonster.png'
    },
    {
      name: 'eyemonster',
      img: 'images/monsters/eyemonster.png'
    },
    {
      name: 'happybby',
      img: 'images/monsters/happybby.png'
    },
    {
      name: 'happybby',
      img: 'images/monsters/happybby.png'
    },
    {
      name: 'starstache',
      img: 'images/monsters/starstache.png'
    },
    {
      name: 'starstache',
      img: 'images/monsters/starstache.png'
    },
    {
      name: 'shocked',
      img: 'images/monsters/shocked.png'
    },
    {
      name: 'shocked',
      img: 'images/monsters/shocked.png'
    },
  ]

  // cards show up randomly every time
  cards.sort(() => 0.5 - Math.random())

  //create board function
  function makeBoard() {
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/monsters/empty.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    let monsters = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      monsters[optionOneId].setAttribute('src', "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
      monsters[optionTwoId].setAttribute('src', "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
      cardsWon.push(cardsChosen)
    } else {
      monsters[optionOneId].setAttribute('src', 'images/monsters/empty.png')
      monsters[optionTwoId].setAttribute('src', 'images/monsters/empty.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cards.length/2) {
      resultDisplay.textContent = 'Congratulations! You found all the monsters!'
    }
  }


  //flip card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  makeBoard()


})


/*-------------------------------- Functions --------------------------------*/

//create board function

