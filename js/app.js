/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const grid = document.querySelector('.grid-div')


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


  function makeBoard() {
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/monsters/empty.png')
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }
  
  makeBoard()


})


/*-------------------------------- Functions --------------------------------*/

//create board function

