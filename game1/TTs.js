const boardWidth = 10;
const boardHeight = 20;
const gameBoard = document.querySelector('.game-board');
const nextPieceContainer = document.querySelector('.next-piece');
const restartButton = document.getElementById('restart-button');
const scoreDisplay = document.querySelector('.score');

let score = 0;
let currentTetromino = null;

const tetrominos = {
  // Defina os tetrominos como antes
};

// Função para criar um bloco no tabuleiro
function createBlock() {
  const block = document.createElement('div');
  block.classList.add('block');
  return block;
}

// Função para criar o tabuleiro
function createBoard() {
  for (let i = 0; i < boardWidth * boardHeight; i++) {
    const block = createBlock();
    gameBoard.appendChild(block);
  }
}

// Função para criar a próxima peça
function createNextPiece() {
  for (let i = 0; i < 16; i++) {
    const block = createBlock();
    nextPieceContainer.appendChild(block);
  }
}

// Função para criar uma peça aleatória
function getRandomTetromino() {
  const tetrominoNames = Object.keys(tetrominos);
  const randomIndex = Math.floor(Math.random() * tetrominoNames.length);
  const randomTetrominoName = tetrominoNames[randomIndex];
  return {
    name: randomTetrominoName,
    shape: tetrominos[randomTetrominoName].shape,
    color: tetrominos[randomTetrominoName].color,
  };
}

// Função para criar uma peça no tabuleiro
function createTetromino() {
  const tetromino = getRandomTetromino();
  currentTetromino = tetromino;
  // Lógica para criar uma peça no tabuleiro
  // Atualize a interface gráfica e a lógica de movimento da peça
}

// Função para reiniciar o jogo
function restartGame() {
  gameBoard.innerHTML = '';
  nextPieceContainer.innerHTML = '';
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  createBoard();
  createNextPiece();
  createTetromino();
}

restartButton.addEventListener('click', restartGame);

// Inicie o jogo
restartGame();
