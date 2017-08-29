import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const xlsx = require("xlsx");

// 根据表格生成权限数据

function readXlsx(url: string, callback: Function) {
  var objArr = [];
  var workbook = xlsx.readFile(url);
  var sheetNameList = workbook.SheetNames;

  for (var i = 0; i < sheetNameList.length; i++) {
    var worksheet = workbook.Sheets[sheetNameList[i]];
    var userArray = xlsx.utils.sheet_to_json(worksheet);
    objArr.push(userArray);
  }

  callback(objArr);
}

const roleFile = resolve(__dirname, "./../roles.xlsx");

interface MenuItem {
  tid: string;
  pid: string;
  path: string;
  name: string;
  filename: string;
  roles: string[];
  children: MenuItem[];
}

function getNestedData(dataArr: MenuItem[], pid: string) {
  const getEle = (item: MenuItem): MenuItem => {
    const { tid, pid, path, name, filename, roles } = item;
    const children = getNestedData(dataArr, item.tid);

    return {
      tid,
      filename,
      pid,
      path,
      name,
      roles,
      children
    };
  };

  return dataArr
    .map(ele => (ele.pid === pid ? getEle(ele) : null))
    .reduce((prev, next) => {
      return next === null ? [...prev] : [...prev, next];
    }, []);
}

function genRoutes(nestedData: MenuItem[]) {
  let tplStartStr = "const routes = [";
  let tplEndStr = "];";

  function getChildrenStr(arr: MenuItem[]) {
    if (arr.length === 0) {
      return "[]";
    }

    let str = "[";
    arr.forEach((item, index) => {
      const { path, name, tid, pid, filename, roles, children } = item;
      const childrenStr = getChildrenStr(children);
      str += `
{
    tid: "${tid}",
    pid: "${pid}",
    path: "${path}",
    name: "${name}",
    roles: [${roles.map(role => `"${role}"`)}],
    component: resolve => require(["${filename}"], resolve),
    children: ${childrenStr}
}`;

      if (index !== arr.length - 1) {
        str += ",";
      }
    });

    return (str += "]");
  }

  return `
const routes = [
${getChildrenStr(nestedData)}
];


export default routes;
`;
}

readXlsx(roleFile, function(data: any) {
  const dealData = data[0];

  const newData = dealData.map((ele: any) => {
    const item = { ...ele };
    item.roles = [];

    for (var prp in ele) {
      if (/^role_/i.test(prp) && ele[prp] === "x") {
        item.roles.push(prp.replace("role_", ""));
      }
    }

    return item as MenuItem;
  });

  const arr = getNestedData(newData, "0");

  const genStr = genRoutes(arr);

  // console.log(genStr);

  writeFileSync("./gen.js", genStr);

  console.log("生成完成.")
});
