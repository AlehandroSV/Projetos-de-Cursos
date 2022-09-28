window.onload = function () {
  setInterval(run, 1000 / 60);
};

let folhaDesenho = document.getElementById("leaf");
let areaDesenho = folhaDesenho.getContext("2d");

let larguraCampo = 600;
let alturaCampo = 500;
let espessuraRede = 5;

let diametroBola = 10;

let espessuraRaquete = 11;
let alturaRaquete = 100;

let efeitoRaquete = 0.3;
let velocidadeJogador2 = 5;

let posicaoJogador1 = 10;
let posicaoJogador2 = 10;

let posicaoBolaX = 10;
let posicaoBolaY = 10;

let velocidadeBolaPosicaoX = 5;
let velocidadeBolaPosicaoY = 5;

let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;

folhaDesenho.addEventListener("mousemove", function (e) {
  posicaoJogador1 = e.clientY - alturaRaquete / 2;
});

function run() {
  areaDesenho.fillStyle = "#286047";
  areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

  areaDesenho.fillStyle = "#ffffff";

  // Linha
  areaDesenho.fillRect(
    larguraCampo / 2 - espessuraRede / 2,
    0,
    espessuraRede,
    alturaCampo
  );

  // Desenha a bola
  areaDesenho.fillRect(
    posicaoBolaX - diametroBola / 2,
    posicaoBolaY - diametroBola / 2,
    diametroBola,
    diametroBola
  );

  // Raquetes
  areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete);
  areaDesenho.fillRect(
    larguraCampo - espessuraRaquete,
    posicaoJogador2,
    espessuraRaquete,
    alturaRaquete
  );

  areaDesenho.fillText("Humano - " + pontuacaoJogador1 + " pontos", 100, 100);
  areaDesenho.fillText(
    "Computador - " + pontuacaoJogador2 + " pontos",
    larguraCampo - 200,
    100
  );

  posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
  posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

  // Verifica a lateral superior
  if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
    velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
  }

  // Verifica a lateral inferior
  if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
    velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
  }

  // Verifica se o Jogador 2 fez um ponto
  if (posicaoBolaX < 0) {
    if (
      posicaoBolaY > posicaoJogador1 &&
      posicaoBolaY < posicaoJogador1 + alturaRaquete
    ) {
      // Rebate a bola
      velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

      let diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
      velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
    } else {
      // Pontos do Jogador 2
      pontuacaoJogador2 = pontuacaoJogador2 + 1;
      // Colocar no centro
      posicaoBolaX = larguraCampo / 2;
      posicaoBolaY = alturaCampo / 2;
      velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
      velocidadeBolaPosicaoY = 3;
    }
  }

  // Verifica se o Jogador 1 fez um ponto
  if (posicaoBolaX > larguraCampo) {
    if (
      posicaoBolaY > posicaoJogador2 &&
      posicaoBolaY < posicaoJogador2 + alturaRaquete
    ) {
      velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

      let diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
      velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
    } else {
      // Pontos do Jogador 1
      pontuacaoJogador1 = pontuacaoJogador1 + 1;
      // Colocar no centro
      posicaoBolaX = larguraCampo / 2;
      posicaoBolaY = alturaCampo / 2;
      velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
      velocidadeBolaPosicaoY = 3;
    }
  }

  // Atualiza a posição Jogador 2
  if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
    posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;
  } else {
    posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
  }
}
