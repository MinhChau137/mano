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
      {
        name: "sv3",
        node: "1",
        port: "80",
      },
    ],
    ports: ["80-5000", "81-5000","80-5001"]
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
      {
        name: "sv3",
        node: "1",
        port: "80",
      },
    ],
    ports: ["80-5000", "81-5000","80-5001"]
  },
];

let routeSvs = [];

let nodes = ["master", "node1", "node2"];

let portsContainer = ["80-5000", "81-50001"];

// get SFCs API
// let SFCsApi = "http://localhost:3000/SFCs";
// function getSFcs(callback) {
//   fetch(SFCsApi)
//     .then((response) => {
//       return response.json();
//     })
//     .then(callback);
// }
// //render SFCs, start
// let SFCs = [];
// getSFcs((data) => {
//   console.log(data);
//   data.map((data) => {
//     SFCs.push(data);
//   });
// });

export { routeSvs, SFCs, nodes, portsContainer };
