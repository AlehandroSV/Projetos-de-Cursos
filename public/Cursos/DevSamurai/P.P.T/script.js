let nome;

let playerPoint = 0;
let computerPoint = 0;

function message(text) {
  document.getElementById("message").innerHTML = text;
}

function sortNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("pedra").onclick = () => {
  play(1);
};
document.getElementById("papel").onclick = () => {
  play(2);
};
document.getElementById("tesoura").onclick = () => {
  play(3);
};

function select(type) {
  document.getElementById(type).id.add("selecionado");
}

function deselect(type) {
  document.getElementById(type).id.remove("selecionado");
}

function calculatorChoice(player, computer) {
  // Player pedra
  if (player === 1 && computer === 1) {
    return 0;
  } else if (player === 1 && computer === 2) {
    return 2;
  } else if (player === 1 && computer === 3) {
    return 1;
  }
  //   Player papel
  else if (player === 2 && computer === 1) {
    return 1;
  } else if (player === 2 && computer === 2) {
    return 0;
  } else if (player === 2 && computer === 3) {
    return 2;
  }
  //   Player tesoura
  else if (player === 3 && computer === 1) {
    return 2;
  } else if (player === 3 && computer === 2) {
    return 1;
  } else if (player === 3 && computer === 3) {
    return 0;
  }

  setTimeout(() => {
    deselect("player", playerChoice);
    deselect("computer", computerChoice);
    message("");
  }, 2000);
}

function defineNome() {
  nome = prompt("Qual seu nome?");
  document.getElementById("playerName").innerHTML = nome;

  message(`Bem-vindo(a) ${nome} está preparado? Escolha uma opção acima...`);
}

function countPlayer() {
  playerPoint++;
  document.getElementById("playerPoint").innerHTML = playerPoint;
}

function countComputer() {
  computerPoint++;
  document.getElementById("computerPoint").innerHTML = computerPoint;
}

function play(choice) {
  let nameUndefined = document.getElementById("playerName");
  let nameValue = nameUndefined.textContent;

  let playerChoice = choice;

  let computerChoice = sortNumber(1, 3);

  let winner = calculatorChoice(playerChoice, computerChoice);

  if (winner === 0) {
    message("Empatou!");
  } else if (winner === 1) {
    if (nameValue === "Player") {
      message(`Ponto para o ${nameValue}!`);
    } else {
      message(`Ponto para o(a) ${nome}!`);
    }
    countPlayer();
  } else if (winner === 2) {
    message("Ponto para computador!");
    countComputer();
  }
}
