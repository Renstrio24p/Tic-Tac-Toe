import React from 'react';
import styles from './sass/modules/app.module.scss';
import Boardrows from './components/BoardRows';
import { Join } from './util/Join';
import DecisionWinner from './components/DecisionMade';


interface TicTacToeProps {
  setsquare: string[];
}

const TicTacToe: React.FC<TicTacToeProps> = ({ setsquare }) => {
  // useStates
  const [nextPlayer, setNextPlayer] = React.useState(true)
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isDraw, setisDraw] = React.useState(false)

  function ClickHandler(i: number) {
    if (squares[i] || DecisionWinner(squares)) {
      return;
    }
    
    const NextSquare = squares.slice();
    {nextPlayer ?
      NextSquare[i] = '✖️' :
      NextSquare[i] = '⭕'
    }
    
    setSquares(NextSquare);
    setNextPlayer(!nextPlayer);

    if(DecisionWinner(squares)){
      return
    } else if (!NextSquare.includes(null)) {
      setisDraw(true); 
    }
  }
  
  const Winner = DecisionWinner(squares);
  
  // Check for a draw
  
  let Stats 
  if (isDraw) {
    Stats = 'The Game is Draw';
  } else {
    Stats = Winner
    ? 'Winner: ' + Winner
    : 'Next Turn: ' + (nextPlayer ? '✖️' : '⭕');
  }

  // Reset All from beginning
  function Resetter(){
    setSquares(Array(9).fill(null))
    setNextPlayer(true)
    setisDraw(false)
  }

  return (
    <div className={Join([styles['d-flex-center'],styles['flex-direction-column']])}>
      <h1 className={Join([
          styles['font-weight-400'], 
          styles['pad-5'],
          styles['text-color-white']
          ])}>
        ✖️ Tic Tac Toe ⭕</h1>
      <span className={styles['text-color-white']}>{Stats}</span>
      <Boardrows newsquare={squares} passedClick={ClickHandler}/>
      <button 
        className={Join([
          styles['pad-5'],
          styles['m-5'],
          styles['button-stretch-bothside'],
          styles['rounded-shadow']
          ])}  
          onClick={Resetter}
      >
        RESET
      </button>
    </div>  
  )
}

export default TicTacToe;
