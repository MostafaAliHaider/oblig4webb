
import React, { useState } from 'react'
import { usePlayers } from './usePlayers'
type PlayerType = {
    player: string
    onClickHandler?: () => void
}

const Player = ({player}: PlayerType) => {
  /* const [players, setPlayers] = useState('')

  const onClickHandler = () =>{
    setPlayers('Im Yahye');
  } */

  const {players, onClickHandler} = usePlayers ();



  return (
    <div>
        <p>Player is: {player}</p>
        <p>{players} </p>
        <button onClick={onClickHandler}>Press me</button>
    </div>
  )
}

export default Player