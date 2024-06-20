// Função para tocar som ao mover o mouse em SayYes
function execSom() {
  var playAudio = document.getElementById("playaudio");
  if (playAudio) {
    playAudio.play().catch(error => {
      console.error("Erro ao tentar tocar o áudio:", error);
    });
  }
}

