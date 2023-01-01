import { SFCs, nodes } from "../data.js";

window.setData = function setData(e) {
  document.getElementById("dropdownId").value = e.innerHTML;
};

window.closeCreate = function closeCreate() {
  // window.history.replaceState('', '', 'http://127.0.0.1:5500/index.html');
  window.location.replace("../index.html")
};
window.addService = function addService() {
  let addNew = {
    id: document.getElementById("dropdownId").value,
    services: [
      {
        name: document.getElementById("nameImage").value,
        node: document.getElementById("node").value,
        port: document.getElementById("port").value,
      },
    ],
  };
  let addCurent = {
    name: document.getElementById("nameImage").value,
    node: document.getElementById("node").value,
    port: document.getElementById("port").value,
  };
  let count = 0;
  SFCs.map((data) => {
    if (document.getElementById("dropdownId").value == data.id) {
      data.services.push(addCurent);
      count++;
    }
  });
  if (count == 0) {
    SFCs.push(addNew);
  }
  // closeCreate();
};
console.log(SFCs);
window.moreService = function moreService() {
  document.getElementById("addedSv").style.display = "block";
  let show = "";
  show += `
  <li>Service: ${document.getElementById("nameImage").value} - Node: ${
    document.getElementById("node").value
  } - Port: ${document.getElementById("port").value} - ID SFC: ${
    document.getElementById("dropdownId").value
  }</li>
  `;
  document.getElementById("listAddedSv").innerHTML += show;

  // add data
  addService();
  // reset data in input
  document.getElementById("dropdownId").value = "";
  document.getElementById("port").value = "";
  document.getElementById("node").value = "";
  document.getElementById("nameImage").value = "";
};
// submit
window.submitAdd = function su58bmitAdd() {
  addService();
  closeCreate();
};
// show node from array node
function showNode() {
  let show = "";
  nodes.map((data) => {
    show += `
          <option value="${data}">${data}</option>
        `;
  });
  document.getElementById("node").innerHTML = show;
  // document.getElementById("nodeEdit").innerHTML = show;
}
showNode();
