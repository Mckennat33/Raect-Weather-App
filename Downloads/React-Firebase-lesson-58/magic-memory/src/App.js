import './App.css'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  // created state to store our cards 
  const [cards, setCards] = useState([])
  cosnt [turns, setTurns] = useState(0)

  // shuffle cards
  //  randomize cards
  const shuffleCards = () => {
    // this is dounling the card images
    const shuffledCards = [...cardImages, ...cardImages]
    // randomizes the card images
      .sort(() => Math.random() - 0.5)
    // adds and ID to each one of the images
      .map((card) => ({ ...card, id: Math.random() }))

    //setting the state to shuffledcards
      setCards(shuffleCards)
      setTurns(0)
  }

  return ( 
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App