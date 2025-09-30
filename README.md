# Jogo da Velha em React #

 🎯 Objetivo do projeto

Este projeto consiste em uma implementação do clássico Jogo da Velha usando **React** com Vite.
Dois jogadores alternam suas jogadas (X e O) até que um vença ou haja empate (velha).
O propósito é demonstrar estrutura de componentes React, comunicação entre eles e estado compartilhado.

---

🧩 Estrutura de Componentes
src/
│
├── components/
│ ├── Board.jsx # Componente do tabuleiro (grade de células)
│ ├── Cell.jsx # Componente de cada célula individual
│ ├── Game.jsx # Componente principal que gerencia estado do jogo
│ └── Status.jsx # Exibe status: jogador da vez / vencedor / empate
│
├── hooks/
│
├── styles/
│ └── ... (arquivos de CSS / styled components / etc)
│
└── main.jsx # Ponto de entrada do React + renderização

A estrutura do projeto segue uma organização simples, com componentes para cada parte lógica do jogo.
| Componente                  | Responsabilidade                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Game.jsx`                  | Controla o estado central do jogo: quem é o jogador atual, histórico de jogadas, verificar vitória/empate, reiniciar jogo. |
| `Board.jsx`                 | Renderiza a grade de células (3×3), delegando cada célula para `Cell.jsx`.                                                 |
| `Cell.jsx`                  | Representa uma única célula; recebe valor (X, O ou vazio) e evento de clique para registrar jogada.                        |
| `Status.jsx`                | Exibe mensagem dinâmica: “Jogador X”, “Jogador O venceu!”, “Empate!”, ou instruções de reinício.                           |
| `useGameLogic` (se existir) | Contém funções auxiliares para avaliar vitória/empate com base no estado atual do tabuleiro.                               |

---

▶️ Como executar o jogo

Siga os passos abaixo para rodar localmente:
1. **Clone o repositório**
2. **Instale as dependências**
3. **Execute em modo de desenvolvimento**
4. **Compilar para produção (opcional)**

Para gerar uma versão otimizada para deploy:
