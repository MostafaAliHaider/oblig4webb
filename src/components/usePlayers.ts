import React, { useState } from 'react'

export const usePlayers = () => {
    const [players, setPlayers] = useState('SUIII')

    const onClickHandler = () =>{
        setPlayers('Im Yahye');
      }

    return {players, onClickHandler};
}

