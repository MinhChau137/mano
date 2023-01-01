// program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}


// define SFCs
import {routeSvs, SFCs} from "./data.js"

console.log(SFCs)
// show SFCs
function showSFC() {
  let show = "";
  SFCs.map((data) => {
    show += `
        <div class="SFC">
          <div class="idService">
            <button><i class="fa-solid fa-plus"></i></button>
            <p for="idService">ID: <span id="idService" idService = ${data.id}>${data.id}</span></p>
          </div>
          <table class="listService">
          <thead>
          <tr class="header">
            <th>Name</th>
            <th>Node</th>
            <th>Port</th>
          </tr>
          </thead>
          <tbody id = ${data.id}>
          </tbody>
          </table>
        </div>
    `;
  });
  document.getElementById("listSvs").innerHTML += show;
}
showSFC();

// show services base on ID
function showService() {
  SFCs.map((data) => {
    let showS = "";
    data.services.map((data) => {
      showS += `
        <tr>
        <td>${data.name}</td>
        <td>${data.node}</td>
        <td>${data.port}</td>         
      </tr>
      `;
    });
    document.getElementById(data.id).innerHTML = showS;
  });
}
showService();

// get data from dropdown to input
function setData(e) {
  document.getElementById("dropdownId").value = e.innerHTML;
}

// create
function openCreate() {
  document.getElementById("create").style.display = "flex";
}

// route
function openRoute() {
  SFCs.map((data) => {
    if (data.services.length > 2 && routeSvs.length < data.services.length/2) {
      // window.location = "./route/index.html";
      alert("Hay route cho cac services");
    }
  });
}
// openRoute();

function openEdit(e) {
  document.getElementById("myForm").style.display = "flex";
  getDataEdit(e);
}
function closeEdit() {
  document.getElementById("myForm").style.display = "none";
}
function getDataEdit(e) {
  let id = e.getAttribute("edit");
  Services.map((data) => {
    if (data.name == id) {
      document.getElementById("nameImageEdit").value = data.name;
      document
        .getElementById("nameImageEdit")
        .setAttribute("editFor", data.name);
      document.getElementById("routeEdit").value = data.Route;
      let select = document.getElementById("nodeEdit");
      let option;

      for (var i = 0; i < select.options.length; i++) {
        option = select.options[i];
        if (option.value == data.nodeAffinity) {
          option.setAttribute("selected", true);
          return;
        }
      }
    }
  });
}
function editData() {
  let e = document.getElementById("nameImageEdit").getAttribute("editFor");
  Services.map((data) => {
    if (data.name == e) {
      data.name = document.getElementById("nameImageEdit").value;
      data.Route = document.getElementById("routeEdit").value;
      data.nodeAffinity = document.getElementById("nodeEdit").value;
    }
  });
  showData();
  closeEdit();
}

function deleteData(e) {
  let id = e.getAttribute("delete");
  Services.map((data, index) => {
    if (data.name == id) {
      Services.splice(index, 1);
    }
  });
  showData();
}
