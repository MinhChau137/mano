import {SFCs} from "../data.js"

window.setData = function setData(e){
  document.getElementById("dropdownId").value = e.innerHTML;
}

window.closeCreate = function closeCreate() {
  window.location = "../index.html";
}
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
      console.log(data.services);
      data.services.push(addCurent);
      count++;
    }
  });
  if (count == 0) {
    SFCs.push(addNew);
  }
  closeCreate();
}
window.moreService = function moreService() {
  let show = "";
  show += `
  <div class="inforSv">
    <label for="nameImage">Name</label><br>
    <input type="text" id="nameImage" placeholder="Name of image:tag"><br>
    <label for="node">Node</label> <br />
    <select id="node">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select> <br>
    <label for="port">Port</label><br>
    <input type="text" id="port" placeholder="Port"><br>
  </div>
  `;
  document.getElementById("addSvs").innerHTML += show;
}