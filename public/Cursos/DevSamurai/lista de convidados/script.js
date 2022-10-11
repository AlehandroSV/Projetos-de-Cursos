let nameConvid = document.getElementById("name-conv");
let list = document.getElementById("list");
let button = document.getElementById("button");
let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

function listarConvidados() {
  for (const convidado of convidados) {
    let elConvidado = document.createElement("li");
    let elNome = document.createTextNode(convidado.nome);

    let excluir = document.createElement("a");
    excluir.setAttribute("href", "#");
    excluir.onclick = function () {
      convidados = convidados.filter(function (item) {
        return item.nome !== convidado.nome;
      });
      list.innerHTML = "";
      salvarConvidados();
      listarConvidados();
    };

    let textExcluir = document.createTextNode("Excluir");

    excluir.appendChild(textExcluir);
    elConvidado.appendChild(elNome);
    elConvidado.appendChild(excluir);
    list.appendChild(elConvidado);
  }
}

const adicionarConvidado = () => {
  let nome = nameConvid.value;

  convidados.push({ nome: nome });
  list.innerHTML = "";
  salvarConvidados();
  listarConvidados();

  nameConvid.value = "";
};

button.onclick = adicionarConvidado;

function salvarConvidados() {
  localStorage.setItem("convidados", JSON.stringify(convidados));
}
listarConvidados();
