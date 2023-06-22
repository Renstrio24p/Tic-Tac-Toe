import React from 'react';
import Square from './Squares';
import styles from '../../assets/sass/modules/app.module.scss';

export default function Boardrows({
	newsquare,
	passedClick,
}) {
	return (
		<div>
			
			<div className={styles.boardrows}>
				<Square values={newsquare[0]} onSquareClick={() => passedClick(0)} />
				<Square values={newsquare[1]} onSquareClick={() => passedClick(1)} />
				<Square values={newsquare[2]} onSquareClick={() => passedClick(2)} />
			</div>
			<div className={styles.boardrows}>
				<Square values={newsquare[3]} onSquareClick={() => passedClick(3)} />
				<Square values={newsquare[4]} onSquareClick={() => passedClick(4)} />
				<Square values={newsquare[5]} onSquareClick={() => passedClick(5)} />
			</div>
			<div className={styles.boardrows}>
				<Square values={newsquare[6]} onSquareClick={() => passedClick(6)} />
				<Square values={newsquare[7]} onSquareClick={() => passedClick(7)} />
				<Square values={newsquare[8]} onSquareClick={() => passedClick(8)} />
			</div>
		</div>
	);
}
