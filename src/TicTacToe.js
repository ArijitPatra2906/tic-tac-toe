import React, { useState } from 'react'
import EndGame from './EndGame';
import Square from './Square';

function TicTacToe() {


    const INITIAL = "";
    const X_PLAYER = "X";
    const O_PLAYER = "O";
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const [grid,setGrid] = useState(Array(9).fill(INITIAL));
    const [player,setPlayer] = useState(false);
    const [gameFinished,setGameFinished]=useState(false);
    const[draw,setDarw] = useState(false);
    const [winCount,setWinCount] = useState({ X:0,O:0});


    const isGameOver = ()=> {

        if(!gameFinished) {


            for(let i = 0; i < 8; i ++) {
                if(
                    grid[winCombinations[i][0]] === X_PLAYER &&
                    grid[winCombinations[i][1]] === X_PLAYER &&
                    grid[winCombinations[i][2]] === X_PLAYER 
                ){
                    setGameFinished(true)
                    setWinCount({...winCount, X: winCount.X + 1})
                    console.log("x win")
                    return;
                }
            }

            for(let i = 0; i < 8; i ++) {
                if(
                    grid[winCombinations[i][0]] === O_PLAYER &&
                    grid[winCombinations[i][1]] === O_PLAYER &&
                    grid[winCombinations[i][2]] === O_PLAYER 
                ){
                    setGameFinished(true)
                    setWinCount({...winCount, O: winCount.O + 1})
                    console.log("O win")
                    return;
                }
            }

        if(!grid.includes(INITIAL)) {
            setDarw(true);
            setGameFinished(true)
            console.log("DRAW");
        }
    }
    }
    const restartGame = () =>{
        setGrid(Array(9).fill(INITIAL));
        setGameFinished(false);
        setDarw(false)
    };
    const clearHistory =() =>{
        setWinCount({X:0,O:0});
        restartGame()
    }
    isGameOver()
    const handleClick = (id) =>{
        setGrid(
            grid.map((item,index) =>{
                if(index === id) {
                if(player){
                    return X_PLAYER;
                }else{
                    return O_PLAYER;
                }
            } else{
                return item;
            }
            })
        );
        setPlayer(!player)
    }

  return (
    <div>
    

        {gameFinished &&<EndGame winCount={winCount} restartGame={restartGame} player={player} draw={draw}
            clearHistory={clearHistory}
        />}
        <Square clickedArray={grid} handleClick={handleClick}/>

        <div className='win'>

    <span className='win-history'>
        PLAYER 1 WINS: {winCount.X}
        <br/>
        PLAYER 2 WINS: {winCount.O}

    </span>
    </div>
    </div>
  )
}

export default TicTacToe