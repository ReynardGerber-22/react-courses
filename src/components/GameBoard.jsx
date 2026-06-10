const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export const GameBoard = () => {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, index) => {
                return (
                <li key={index}>
                    <ol>
                        {row.map((column, colIndex) => {
                            return (
                            <li key={colIndex}>
                                <button>{column}</button>
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