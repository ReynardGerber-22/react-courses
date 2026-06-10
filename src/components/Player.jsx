import { useState } from 'react'

export const Player = ({initialName, symbol}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)
    return (
        <li>
          <span className="player">
            {isEditing ? <input required type="text" value={name} onChange={(e) => setName(e.target.value)} /> : <span className="player-name">{name}</span>}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={() => setIsEditing((editing) => !editing)}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}