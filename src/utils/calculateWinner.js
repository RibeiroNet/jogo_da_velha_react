export default function calculateWinner(squares) {
  // define todas as combinações possíveis 
  const lines = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
  ];

  // percorre cada combinação possível
  for (let i = 0; i < lines.length; i++) {
    // desestrutura os índices 
    const [a, b, c] = lines[i];

    // verifica se os três quadrados da combinação têm o mesmo caracter, x ou o  
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // retorna o vencedor
      return squares[a];
    }
  }
  
  // caso não haja vencedor, retorna null
  return null;
}
