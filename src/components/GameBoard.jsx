const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export const GameBoard = ({ onSelectSquare }) => {

    return (
        <ol id="game-board">
            {gameBoard.map((row, index) => {
                return (
                <li key={index}>
                    <ol>
                        {row.map((column, colIndex) => {
                            return (
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>{column}</button>
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