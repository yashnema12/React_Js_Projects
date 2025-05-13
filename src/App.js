import { useState } from 'react'
import './App.css'
import SingleCard from './Components/SingleCard';

const cardImages =[
  {"src":"/img/helmet-1.png"},
  {"src":"/img/potion-1.png"},
  {"src":"/img/ring-1.png"},
  {"src":"/img/scroll-1.png"},
  {"src":"/img/shield-1.png"},
  {"src":"/img/sword-1.png"},
]
/*array with 'src' [property path] */

function App() {
  const [cards, setCards] =useState([])
  const [turns, setTurns] =useState(0)


//shuffle cards
const shuffleCards =() =>{
  const shuffleCards =[...cardImages, ...cardImages]
  //with spread it can access the arrays - 12 total


  .sort(() => Math.random() - 0.5)
  .map((card)=>({...card, id: Math.random() }))

  setCards(shuffleCards)
  setTurns(0)

}

console.log(cards,turns);


  return (
    <div>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
} 

export default App
