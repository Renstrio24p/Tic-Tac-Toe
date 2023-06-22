import React from "react";
import { Join } from "../../assets/util/JoinClasses";
import styles from '../../assets/sass/modules/app.module.scss'

export default function Square({values, onSquareClick, Highlight}){
	// Square Function
	return (
		<button 
			className={Join([
				styles.square, 
				styles['font-size-2rem'],
				styles['rounded-shadow'],
				styles['font-weight-400'],
				Highlight && styles['Highlight']
			])}
			onClick={onSquareClick}
		>{values}</button>
	)
}