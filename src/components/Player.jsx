import { useState } from 'react'

export const Player = ({ initialName, symbol, isActive, onPlayerNameChange }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(initialName)

  function handleSave() {
    setIsEditing(!isEditing)
    if (isEditing) {
      onPlayerNameChange(symbol, name)
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? <input required type="text" value={name} onChange={(e) => setName(e.target.value)} /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleSave}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}