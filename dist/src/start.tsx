import React from "react";
import { Join } from "./sass/util/join";
import TicTacToe from "./TicTaeToe";

export default function Start() {
  return (
    <div className={Join(["App"])}>
      <TicTacToe setsquare={[]} />
    </div>
  );
}
