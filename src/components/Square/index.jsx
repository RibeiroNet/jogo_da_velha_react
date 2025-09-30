export default function Square({ value, onSquareClick }) {
// retorna um botão 
// o botão recebe o valor atuale chama a função ao ser clicado
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}