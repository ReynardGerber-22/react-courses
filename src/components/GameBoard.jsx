const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export const GameBoard = ({ onSelectSquare, turns }) => {

    let gameBoard = initialGameBoard;

    console.log(turns);

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
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
                                <button onClick={() => onSelectSquare(index,colIndex)}>{column}</button>
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