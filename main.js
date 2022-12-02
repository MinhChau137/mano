// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let Services = [
  {
    id: generateString(11),
    name: "abc",
    nodeAffinity: "1",
    Route: '{"sv1, sv2":"1,2,3", "sv2, sv3":"1,2,3"}',
  },
  {
    id: generateString(11),
    name: "abc2",
    nodeAffinity: "2",
    Route: '{"sv1, sv2":"1,2,3", "sv3, sv2":"1,2,3"}',
  },
];
let nodes = ["1", "2", "3"];

function showData() {
  let show = "";
  Services.map((data) => {
    let routes = [];
    let route = JSON.parse(data.Route);
    for (const x in route) {
      routes.push(x + ":" + route[x]);
    }
    show += `<tr>
       <td>${data.id}</td>
       <td>${data.name}</td>
       <td>${data.nodeAffinity}</td>
       <td>${routes.map((data) => {
         return data;
       })}</td>
       <td>
        <button class = "btn btn-warning popup" onclick = "openEdit(this)" edit = "${
          data.name
        }">Edit</button>
        <button class = "btn btn-danger deleteData" delete = "${
          data.name
        }" onclick = "deleteData(this)">Delete</button>
       </td>
     </tr>`;
  });

  document.getElementById("result").innerHTML = show;
}

showData();

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
function openCreate(){
  document.getElementById("create").style.display = "flex";
}
function closeCreate(){
  document.getElementById("create").style.display = "none";
}
function addService() {
  let add = {
    id: generateString(11),
    name: document.getElementById("nameImage").value,
    nodeAffinity: document.getElementById("node").value,
    Route: document.getElementById("route").value,
  };
  // if (typeof(add.Route) == object){
    Services.push(add);
    showData();
    closeCreate();
  // }
  // else{
  //   alert("Route is a JSON");
  // }
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
      document.getElementById("nameImageEdit").setAttribute("editFor", data.name)
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
  Services.map((data)=>{
    if(data.name == e){
      data.name = document.getElementById("nameImageEdit").value;
      data.Route = document.getElementById("routeEdit").value;
      data.nodeAffinity = document.getElementById("nodeEdit").value;
    }
  })
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
