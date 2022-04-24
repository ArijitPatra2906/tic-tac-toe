import React from 'react'

function EndGame({ restartGame, player,draw,winCount,clearHistory }) {
  return (
    <div className='end-game-screen'>

        {!draw && <span className='win-text'>{player ? "PLAYER 2 WON" : "PLAYER 1 WON"}</span>}
        {draw && <span className='win-text'>DRAW GAME</span>}


        <span className='win-history'>
            PLAYER 1 WINS: {winCount.X}
            <br/>
            PLAYER 2 WINS: {winCount.O}

        </span>

        <button className='btn' onClick={restartGame}>RESTART GAME</button>
        <button className='btn' onClick={clearHistory}>CLEAR HISTORY</button>
    </div>
  )
}

export default EndGame;