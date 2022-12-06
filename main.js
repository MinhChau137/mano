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
let SFCs = [
  {
    id: 1,
    services: [
      {
        name: "sv1",
        node: "1",
        port: "80",
      },
      {
        name: "sv2",
        node: "1",
        port: "80",
      },
    ],
  },
  {
    id: 2,
    services: [
      {
        name: "sv21",
        node: "1",
        port: "80",
      },
      {
        name: "sv22",
        node: "1",
        port: "80",
      },
    ],
  },
];
let nodes = ["1", "2", "3"];
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
            <th>Action</th>
          </tr>
          </thead>
          <tbody id = ${data.id}>
          </tbody>
          </table>
        </div>
    `;
  });

  document.getElementById("result").innerHTML = show;
}
showSFC();
// show services base on ID
function showService(){
  SFCs.map(data=>{
    let showS = '';
    data.services.map((data) => {
      showS += `
        <tr>
        <td>${data.name}</td>
        <td>${data.node}</td>
        <td>${data.port}</td>
        <td>
          <button class = "btn btn-warning popup" onclick = "openEdit(this)" edit = "${data.name}">Edit</button>
          <button class = "btn btn-danger deleteData" delete = "${data.name}" onclick = "deleteData(this)">Delete</button>
        </td>          
      </tr>
      `;
    });
    document.getElementById(data.id).innerHTML = showS;
  })
}
showService();

// get data from dropdown to input
function setData(e){
  document.getElementById("dropdownId").value = e.innerHTML;
}
// show node from array node
function showNode() {
  let show = "";
  nodes.map((data) => {
    show += `
          <option value="${data}">${data}</option>
        `;
  });
  document.getElementById("node").innerHTML = show;
  document.getElementById("nodeEdit").innerHTML = show;
}
showNode();

// create
function openCreate() {
  document.getElementById("create").style.display = "flex";
}
function closeCreate() {
  document.getElementById("create").style.display = "none";
}
function addService() {
  let addNew = {
    id: document.getElementById("dropdownId").value,
    services: [
      {
        name: document.getElementById("nameImage").value,
        node: document.getElementById("node").value,
        port: document.getElementById("port").value,
      }
    ]
  };
  let addCurent = {
    name: document.getElementById("nameImage").value,
    node: document.getElementById("node").value,
    port: document.getElementById("port").value,
  };
  let count = 0;
  SFCs.map(data=>{
    console.log(document.getElementById("dropdownId").value)
    if (document.getElementById("dropdownId").value == data.id){
      console.log(data.services)
      data.services.push(addCurent);
      count ++;
      console.log(data.services)
    }
  })
  if(count == 0){
    SFCs.push(addNew);
  }
  showSFC();
  showService();
  closeCreate();
}


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
