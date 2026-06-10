import {useState} from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, index) => {
                return (
                <li key={index}>
                    <ol>
                        {row.map((column, colIndex) => {
                            return (
                            <li key={colIndex}>
                                <button onClick={() => {handleSelectSquare(index,colIndex)}}>{column}</button>
                            </li>
                            )
                        }
                        )}
                    </ol>
                </li>
                )
            })}
        </ol>
    )
}