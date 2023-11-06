function recursiveFugue(assignedObjList, indexArr, value) {
  if (indexArr.length === 1) {
      // assignedObjList[indexArr[0]] = value;
      assignedObjList[indexArr[0]].children = value;
  } else {
    recursiveFugue(assignedObjList[indexArr[0]].children, indexArr.slice(1), value);
  }
}

/**
 * case 1
 */
// const tempObjList = [
//     {
//         "id": "0b561d58e0aa4e643216dc8bdbe813a75d4f341e",
//         "name": "docs",
//         "type": "tree",
//         "path": "docs",
//         "mode": "040000",
//         "dataIndex": 0
//     },
//     {
//         "id": "56ee62fdfe24a8b721073b1b32b7b5fdaa32a2b5",
//         "name": "static",
//         "type": "tree",
//         "path": "static",
//         "mode": "040000",
//         "dataIndex": 1
//     },
//     {
//         "id": "020c29c1ee106f1922ab09a5efcd0613553af50e",
//         "name": ".gitignore",
//         "type": "blob",
//         "path": ".gitignore",
//         "mode": "100644",
//         "dataIndex": 2
//     },
//     {
//         "id": "23bd4a93e80845000118926b2fffb5200fa266a8",
//         "name": "package.json",
//         "type": "blob",
//         "path": "package.json",
//         "mode": "100644",
//         "dataIndex": 3
//     }
// ]
// const indexArr = [0]
// const value = {
//     foo:1
//     }

/**
 * case 2
 */
const tempObjList = [
    {
        "id": "0b561d58e0aa4e643216dc8bdbe813a75d4f341e",
        "name": "docs",
        "type": "tree",
        "path": "docs",
        "mode": "040000",
        "dataIndex": 0,
        "loading": false,
        "children": [
            {
                "id": "3c42d08b176653ebed029ffff847e4263dbd3096",
                "name": "extends",
                "type": "tree",
                "path": "docs/extends",
                "mode": "040000",
                "dataIndex": "0-0"
            },
            {
                "id": "97590a613e1add32d25b354dbeee7016a21c4e16",
                "name": "intro",
                "type": "tree",
                "path": "docs/intro",
                "mode": "040000",
                "dataIndex": "0-1"
            },
            {
                "id": "f926a48d4a88fcd5ff21c15fbef524a19a775b08",
                "name": "monitor",
                "type": "tree",
                "path": "docs/monitor",
                "mode": "040000",
                "dataIndex": "0-2"
            },
            {
                "id": "a3b2cd2accda864afa4275b715b1d56275be5109",
                "name": "static",
                "type": "tree",
                "path": "docs/static",
                "mode": "040000",
                "dataIndex": "0-3"
            },
            {
                "id": "dfd35c58be855b3cb8a63c4e9bc11056703d0d02",
                "name": "system",
                "type": "tree",
                "path": "docs/system",
                "mode": "040000",
                "dataIndex": "0-4"
            },
            {
                "id": "853edc1beddcdc273c6545fea953df3950557ee8",
                "name": "test",
                "type": "tree",
                "path": "docs/test",
                "mode": "040000",
                "dataIndex": "0-5"
            },
            {
                "id": "dfb0fa3f5c6c13f20f46c37296d5c6b775408fc4",
                "name": "杂项",
                "type": "tree",
                "path": "docs/杂项",
                "mode": "040000",
                "dataIndex": "0-6"
            },
            {
                "id": "d6d37a58c6cae144f00547ec8f94605a27a3d03b",
                "name": "README.MD",
                "type": "blob",
                "path": "docs/README.MD",
                "mode": "100644",
                "dataIndex": "0-7"
            },
            {
                "id": "c583a394cecbc9400f8b4fc5f1c236d509acf137",
                "name": "config.json",
                "type": "blob",
                "path": "docs/config.json",
                "mode": "100644",
                "dataIndex": "0-8"
            }
        ]
    },
    {
        "id": "56ee62fdfe24a8b721073b1b32b7b5fdaa32a2b5",
        "name": "static",
        "type": "tree",
        "path": "static",
        "mode": "040000",
        "dataIndex": 1
    },
    {
        "id": "020c29c1ee106f1922ab09a5efcd0613553af50e",
        "name": ".gitignore",
        "type": "blob",
        "path": ".gitignore",
        "mode": "100644",
        "dataIndex": 2
    },
    {
        "id": "23bd4a93e80845000118926b2fffb5200fa266a8",
        "name": "package.json",
        "type": "blob",
        "path": "package.json",
        "mode": "100644",
        "dataIndex": 3
    }
]
const indexArr = [0, 1]
const value = {
    foo:1
}

recursiveFugue(tempObjList, indexArr, value)
console.log(tempObjList);