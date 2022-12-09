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
  },
];

let routeSvs = []

let nodes = ["master", "node1", "node2"];


export {routeSvs, SFCs, nodes}