import { SFCs, routeSvs } from "../data.js";

window.showSFCinEdit = function showSFCinEdit() {
  let show = "";
  SFCs.map((data) => {
    show = `
    <li class="SFC">
      <button onclick = "getAllData(this)" id = "${data.id}"><i class="fa-solid fa-plus"></i></button>
      <p>ID:${data.id}</p>
    </li>
    `;
    document.getElementById("showData").innerHTML += show;
  });
};
showSFCinEdit();
window.getAllData = function getAllData(e){
  let id = e.getAttribute("id")
  let show = ""
  SFCs.map(data=>{
    if(data.id == id){
      data.services.map(data=>{
        show = `
        <li></li>
        `
      })
    }
  })
}