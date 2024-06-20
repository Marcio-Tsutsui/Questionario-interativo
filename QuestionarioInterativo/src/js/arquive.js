// Função para mover o botão Não"  
function moveNaoButton() {
            const button = document.getElementById('nao-button');
            const minX = 0;
            const minY = 0;
            const maxX = window.innerWidth - button.clientWidth;
            const maxY = window.innerHeight - button.clientHeight;
        
            const newTop = Math.random() * (maxY - minY) + minY;
            const newLeft = Math.random() * (maxX - minX) + minX;
        
            button.style.top = newTop + 'px';
            button.style.left = newLeft + 'px';

  showGif();          
  }

// Função para redirecionar para a página SayYES.hrml
function navigateToSayYES() {
  const audio = document.getElementById('sim-sound');
  audio.play().then(() => {
      window.location.href = 'templates/home/SayYES.html';
  }).catch(error => {
      console.error("Erro ao tentar tocar o áudio:", error);
      window.location.href = 'templates/home/SayYES.html';
  });
}     
  
// Função para todar som e mover o botão "Não"
function playSoundAndMoveNaoButton() {
  const audio = document.getElementById('nao-sound');
  audio.play().catch(error => {
    console.error("Erro ao tentar tocar o áudio:", error);
});
moveNaoButton();
}

// Função para exibir o GIF no rodapé
function showGif() {
  const gifContainer = document.getElementById('gif-container');
  gifContainer.style.display = 'block';
  setTimeout(() => {
      gifContainer.style.display = 'none';
  }, 2000);
}