// data.json data like

// {
//     "name": "your name",
//     "age": 23
// }

interface Info {
  name: string;
  age: number;
}

const data: Info = require("./data.json");

// https://github.com/Microsoft/TypeScript/issues/17999

export type AttributeType =
  | "string"
  | "number"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";

var resolved: AttributeType =
  ["string", "number", "boolean", "date", "array", "object"].indexOf(
    typeof "str"
  ) === -1
    ? "object"
    : typeof "str";

const type = typeof 345;
