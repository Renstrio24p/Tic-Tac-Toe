import React from 'react';
import Square from './Squares';
import styles from '../sass/modules/app.module.scss'

interface BoardrowsProps {
  newsquare: string[];
  passedClick: (index: number) => void;
}

const Boardrows: React.FC<BoardrowsProps> = ({ newsquare, passedClick }) => {
  return (
    <div>
      <div className={styles.boardrows}>
        <Square values={newsquare[0]} onSquareClick={() => passedClick(0)} Highlight={false} />
        <Square values={newsquare[1]} onSquareClick={() => passedClick(1)} Highlight={false} />
        <Square values={newsquare[2]} onSquareClick={() => passedClick(2)} Highlight={false} />
      </div>
      <div className={styles.boardrows}>
        <Square values={newsquare[3]} onSquareClick={() => passedClick(3)} Highlight={false} />
        <Square values={newsquare[4]} onSquareClick={() => passedClick(4)} Highlight={false} />
        <Square values={newsquare[5]} onSquareClick={() => passedClick(5)} Highlight={false} />
      </div>
      <div className={styles.boardrows}>
        <Square values={newsquare[6]} onSquareClick={() => passedClick(6)} Highlight={false} />
        <Square values={newsquare[7]} onSquareClick={() => passedClick(7)} Highlight={false} />
        <Square values={newsquare[8]} onSquareClick={() => passedClick(8)} Highlight={false} />
      </div>
    </div>
  );
}

export default Boardrows;
