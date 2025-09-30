import { useState }  from "react";
import styles from "./Game.module.css";
import Board from "../Board";

export default function Game() {
  // estado que guarda o histórico das jogadas
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // estado que armazena o índice 
  const [currentMove, setCurrentMove] = useState(0);
  // define se é a vez do jogador x
  const xIsNext = currentMove % 2 === 0;
  // obtém o estado do tabuleiro 
  const currentSquares = history[currentMove];
  
  // função chamada quando uma jogada acontece 
  function handlePlay(nextSquares) {
    // cria um novo histórico até o movimento atual e add a nova jogada
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // atualiza o histórico com a nova lista 
    setHistory(nextHistory);
    // define o movimento atual como o último índice 
    setCurrentMove(nextHistory.length - 1);
  }

  // função para retroceder ou avançar uma jogada
  function jumpTo(nextMove) {
    // atualiza o movimento atual 
    setCurrentMove(nextMove);
  }

  // lista de botões que permitem navegar pelo histórico de jogadas
  const moves = history.map((squares, move) => {
    let description;
    // movimento > 0 exibe o número da jogada
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      // caso contrário exibe o início 
      description = 'Go to game start';
    }
    // retorna um item da lista
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // renderiza o layout 
  return (
    <div className={styles.game}>
      <div className={styles["game-board"]}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles["game-info"]}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
