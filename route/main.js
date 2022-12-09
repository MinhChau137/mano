import { SFCs, routeSvs } from "../data.js";

function getIDSFC() {
  let showIDSFC = "";
  SFCs.map((data) => {
    if (data.services.length > 2) {
      showIDSFC += `
        <option value="${data.id}" onclick = "getDataID(this)">${data.id}</option>
      `;
    }
  });
  document.getElementById("idSFC").innerHTML += showIDSFC;
}
getIDSFC();

function getServiceRoute(id) {
  let showNameService = "";
  SFCs.map((data) => {
    if (data.id == id) {
      document.getElementById("selectService").style.display = "block";
      data.services.map((data) => {
        showNameService += `
        <option value="${data.name}">${data.name}</option>
        `;
      });
    }
  });
  document.getElementById("nameService1").innerHTML = showNameService;
  document.getElementById("nameService2").innerHTML = showNameService;
}

window.changeSFC = function changeSFC() {
  let select = document.getElementById("idSFC");
  let value = select.options[select.selectedIndex].value;
  select.value = value;
  // console.log(select.value)
  if (select.value != "default") {
    getServiceRoute(select.value);
  }
};

window.changeSv1 = function changeSv1() {
  let select = document.getElementById("nameService1");
  let value = select.options[select.selectedIndex].value;
  select.value = value;
};

window.changeSv2 = function changeSv2() {
  let select = document.getElementById("nameService2");
  let value = select.options[select.selectedIndex].value;
  select.value = value;
};

window.createRoute = function createRoute() {
  let sv1 = document.getElementById("nameService1").value;
  let sv2 = document.getElementById("nameService2").value;
  let route = document.getElementById("route").value;
  let showRoute = "";
  let showRouteNewSv = "";
  let text = sv1.concat("-", sv2);
  let count = 0;
  let addRoute = {};

  if (sv1 != sv2) {
    routeSvs.map((data) => {
      if (document.getElementById("idSFC").value == data.id) {
        count++;
      }
    });
    if (count == 0) {
      addRoute = {
        id: document.getElementById("idSFC").value,
        routes: [
          {
            name: text,
            route: route,
          },
        ],
      };
      routeSvs.push(addRoute);
      showRouteNewSv = `
      <div class="routeASv">
        <div class="id" id="idService">
          <button class="btn"><i class="fa-solid fa-plus"></i></button>
          <p>ID: ${document.getElementById("idSFC").value}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name services</th>
              <th>Route</th>
            </tr>
          </thead>
          <tbody id="showRoute_${document.getElementById("idSFC").value}">
            <tr>
              <td>${sv1} - ${sv2}</td>
              <td>${route}</td>
            </tr>
          </tbody>
          <tbody>

          </tbody>
        </table>
      </div>
      `;
      document.getElementsByClassName("route")[0].innerHTML += showRouteNewSv;
    } else {
      routeSvs.map((data) => {
        addRoute = {
          name: text,
          route: route,
        };
        if (document.getElementById("idSFC").value == data.id) {
          data.routes.push(addRoute);
        }
      });
      showRoute = `
      <tr>
        <td>${sv1} - ${sv2}</td>
        <td>${route}</td>
      </tr>
      `;
      let id = "showRoute_".concat(document.getElementById("idSFC").value);
      document.getElementById(id).innerHTML += showRoute;
    }
  } else{
    alert("2 service trung nhau");
  }

  if(routeSvs.length != 0){
    document.getElementsByClassName("route")[0].style.display="block"
  }
};

window.closeCreateRoute = function closeCreateRoute() {
  window.location = "../index.html";
}
