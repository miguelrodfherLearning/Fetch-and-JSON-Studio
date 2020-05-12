window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            json.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            let container = document.getElementById("container");
            
            document.getElementById("astronautNames").innerHTML += ` (${json.length})`;

            for (let i = 0; i < json.length; i++) {
                container.innerHTML +=`
                    <div class="astronaut">
                      <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                          <li>Hours in space: ${json[i].hoursInSpace}</li>
                          <li id="${json[i].id}">Active: ${json[i].active}</li>
                          <li>Skills: ${json[i].skills}</li>
                        <ul>
                      </div>
                      <img class="avatar" src=${json[i].picture}></img>
                    </div>`;
                if (json[i].active) {
                    let act = document.getElementById(json[i].id);
                    act.setAttribute("id", "actv");
                };
            };
        });
    });
});