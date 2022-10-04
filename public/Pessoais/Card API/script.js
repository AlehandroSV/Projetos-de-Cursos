let user = document.getElementById("userName");

let addErro = document.getElementById("error");

// Infos
let imgCard = document.getElementById("imagem");
let name = document.getElementById("name");
let bio = document.getElementById("bio");

// Social Conection
let addFollowers = document.getElementById("addFollowers");
let addFollowing = document.getElementById("addFollowing");

// Redes
let twitter = document.getElementById("urlTwitter");
let company = document.getElementById("nameCompany");
let repos = document.getElementById("numRepos");
let github = document.getElementById("url");

const userConfirm = () => {
  let fixa = `https://api.github.com/users/${user.value}`;
  const ghPromise = () => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open("GET", fixa);
      xhr.send(null);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Erro na Função!!!");
          }
        }
      };
    });
  };

  ghPromise()
    .then((resposta) => {
      imgCard.setAttribute("src", resposta.avatar_url);
      imgCard.setAttribute("alt", `Foto de ${resposta.name}`);

      name.innerText = resposta.name;

      bio.innerText = resposta.bio;

      addFollowers.innerText = `Followers: ${resposta.followers}`;

      addFollowing.innerText = `Followings: ${resposta.following}`;
      resposta.following;

      // Confirma se tem Twitter
      let confirmTwitter = resposta.twitter_username;
      if (confirmTwitter !== null) {
        document.getElementById("twitter").classList.remove("iconOff");

        twitter.innerText = resposta.twitter_username;

        document
          .getElementById("urlTwitter")
          .setAttribute(
            "href",
            `https://twitter.com/${resposta.twitter_username}`
          );
      }

      // Confirma se tem Company
      let confirmCompany = resposta.company;
      if (confirmCompany !== null) {
        document.getElementById("company").classList.remove("iconOff");
        company.innerText = resposta.company;
      }

      // Confirma se tem Repositório
      let confirmRepos = resposta.public_repos;
      if (confirmRepos !== null) {
        document.getElementById("repos").classList.remove("iconOff");
        repos.innerText = `${resposta.public_repos} Repositórios públicos`;
      }

      // ADD Link GitHub
      let confirmGitHub = resposta.html_url;
      if (confirmGitHub !== null) {
        document.getElementById("github").classList.remove("iconOff");

        github.innerText = resposta.login;

        document.getElementById("url").setAttribute("href", resposta.html_url);
      }
    })
    .catch((erro) => {
      console.log(erro);
      addErro.classList.remove("no");
      addErro.classList.add("yes");
    });
};
