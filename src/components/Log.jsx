export const Log = ({gameTurns}) => {
    return (
        <ol id="log">
            {gameTurns.map((turn) => {
                let {row, col} = turn.square
                return <li key={`${row}-${col}`}>
                {turn.player} selected {row} , {col}
                </li>
               
            })}
        </ol>
    )
}