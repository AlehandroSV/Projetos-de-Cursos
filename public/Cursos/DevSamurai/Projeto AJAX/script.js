let button = document
  .getElementById("pesquisar")
  .addEventListener("click", () => {
    const avatarUrl = document.getElementById("avatar");
    const nameUser = document.getElementById("userName");
    const loginName = document.getElementById("loginName");
    const quantiFollowers = document.getElementById("followers");
    const blog = document.getElementById("blog");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.github.com/users/${nameUser.value}`);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const res = JSON.parse(xhr.responseText);

        const name = res.name;
        const avatar = res.avatar_url;
        const followers = res.followers;
        const blogUrl = res.blog;

        avatarUrl.setAttribute("src", avatar);
        loginName.innerHTML = name;
        quantiFollowers.innerHTML = `Followers: ${followers}`;
        blog.innerHTML = blogUrl;
      }
    };
  });
