import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import {useState} from 'react'
import { Log } from "./components/Log"

function App() {

  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(row, col) {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X")
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0  && prevTurns[0] === "X") {
        currentPlayer = "O"
      }
      const updatedTurns = [
        {square: {row, col}, player: currentPlayer},...prevTurns
      ]
      return updatedTurns;
    })
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
      </ol>
      <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare} />
    </div>
    <Log />
   </main>
  )
}

export default App
