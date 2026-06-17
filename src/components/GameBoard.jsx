

export const GameBoard = ({ onSelectSquare, board }) => {
    return (
        <ol id="game-board">
            {board.map((row, index) => {
                return (
                    <li key={index}>
                        <ol>
                            {row.map((column, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button onClick={() => onSelectSquare(index, colIndex)} disabled={column != null}>{column}</button>
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