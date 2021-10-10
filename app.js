let getUser = document.getElementById("getUsers");
getUser.onclick = function () {
  let users = fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      html = "";
      data.forEach((element) => {
        console.log(element.login);
        console.log(element.id);
        newHtml = `
            <div class="col-sm-6 col-md-4 col-lg-2 main">
              <div class="thumbnail">
                <img src="${element.avatar_url}" alt="user image">
                <hr>
                <div class="caption">
                  <h3>User-name: ${element.login}</h3>
                  <b><p>user id: ${element.id}</p><b>
                  <p></p>
                </div>
              </div>
            </div>`;
        html += newHtml;
      });
      let heading=`<h1>The list of users using the application are:</h1>`
      document.getElementById('heading').innerHTML=heading;
      document.getElementById("users").innerHTML = html;
    });
};
