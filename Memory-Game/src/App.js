import React from 'react'; 
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages =[
  {"src":"/img/helmet-1.png",matched: false},
  {"src":"/img/potion-1.png",matched: false},
  {"src":"/img/ring-1.png"  ,matched: false},
  {"src":"/img/scroll-1.png",matched: false},
  {"src":"/img/shield-1.png",matched: false},
  {"src":"/img/sword-1.png" ,matched: false},
]
/*array with 'src' [property path] */

function App() {
  const [cards, setCards] =useState([])
  const [turns, setTurns] =useState(0)
  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)
  const [disabled,setDisabled] =   useState(false)


//shuffle cards
const shuffleCards =() =>{
  const shuffleCards =[...cardImages, ...cardImages]
  //with spread it can access the arrays - 12 total


  .sort(() => Math.random() - 0.5)
  .map((card)=>({...card, id: Math.random() }))

  setChoiceOne(null)
  setChoiceTwo(null) 
  setCards(shuffleCards)
  setTurns(0)
}

//handle a choice
const handleChoice = (card)=>{
 choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

}

//compare two select cards
useEffect(()=>{
  if(choiceOne && choiceTwo){
     setDisabled(true)

    if(choiceOne.src === choiceTwo.src){
      setCards(prevCards =>{
        return prevCards.map(card =>{
          if(card.src === choiceOne.src){
            return{...card,matched: true}
          }else{
            return card
          }
        })
      })
      resetTurn()
    }else{
      
      setTimeout(()=> resetTurn(),1000)
    }
  }
},[choiceOne,choiceTwo])

console.log(cards)

//reset choice & increase turn
const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns=> prevTurns + 1)
  setDisabled(false)
}

//start a new game automatically
useEffect(()=>{
  shuffleCards()
},[])

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice}          
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  )
} 

export default App


