import React from "react";
import { Join } from "../util/Join";
import styles from '../sass/modules/app.module.scss';

interface SquareProps {
  values: string;
  onSquareClick: () => void;
  Highlight: boolean;
}

const Square: React.FC<SquareProps> = ({ values, onSquareClick, Highlight }) => {
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
    >
      {values}
    </button>
  );
};

export default Square;
