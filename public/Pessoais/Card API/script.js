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
let twitter = document.getElementById("twitter");
let company = document.getElementById("company");
let repos = document.getElementById("repos");
let github = document.getElementById("github");

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

      addFollowers.innerText = `Follower: ${resposta.followers}`;

      addFollowing.innerText = `Following: ${resposta.following}`;
      resposta.following;

      // Confirma se tem Twitter
      let confirmTwitter = resposta.twitter_username;
      if (confirmTwitter !== null) {
        let iconTwitter = document.createElement("i");
        iconTwitter.classList.add("fa-brands");
        iconTwitter.classList.add("fa-twitter");
        iconTwitter.style.padding = "0 0.5rem 0 0";

        let twitter_username = document.createElement("span");
        twitter_username.innerText = `@${resposta.twitter_username}`;

        twitter.appendChild(iconTwitter);
        twitter.appendChild(twitter_username);
      }

      // Confirma se tem Company
      let confirmCompany = resposta.company;
      if (confirmCompany !== null) {
        let iconCompany = document.createElement("i");
        iconCompany.classList.add("fa-solid");
        iconCompany.classList.add("fa-building");
        iconCompany.style.padding = "0 0.5rem 0 0";

        let nameCompany = document.createElement("span");
        nameCompany.innerText = resposta.company;

        company.appendChild(iconCompany);
        company.appendChild(nameCompany);
      }

      // Confirma se tem Repositório
      let confirmRepos = resposta.public_repos;
      if (confirmRepos !== null) {
        let iconRepo = document.createElement("i");
        iconRepo.classList.add("fa-solid");
        iconRepo.classList.add("fa-file-code");
        iconRepo.style.padding = "0 0.5rem 0 0";

        let numberRepos = document.createElement("span");
        numberRepos.innerText = `${resposta.public_repos} Repositórios públicos`;

        repos.appendChild(iconRepo);
        repos.appendChild(numberRepos);
      }

      // ADD Link GitHub
      let confirmGitHub = resposta.html_url;
      if (confirmGitHub !== null) {
        let iconGitHub = document.createElement("i");
        iconGitHub.classList.add("fa-brands");
        iconGitHub.classList.add("fa-github");
        iconGitHub.style.padding = "0 0.5rem 0 0";

        let urlGitHub = document.createElement("a");
        urlGitHub.setAttribute("href", resposta.html_url);
        urlGitHub.innerText = resposta.login;

        github.appendChild(iconGitHub);
        github.appendChild(urlGitHub);
      }
    })
    .catch((erro) => {
      console.log(erro);
      addErro.classList.remove("no");
      addErro.classList.add("yes");
    });
};
