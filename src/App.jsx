import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import { useState } from 'react'
import { Log } from "./components/Log"
import { WINNING_COMBINATIONS } from 'winning-combinations.js'

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  let gameBoard = initialGameBoard;

  console.log(turns);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[].player
    const secondSquareSymbol = gameTurns.player
    const thirdSquareSymbol = gameTurns.player

  }

  function handleSelectSquare(row, col) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row, col }, player: currentPlayer }, ...prevTurns
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
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
