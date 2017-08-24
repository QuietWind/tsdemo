import { List, Map, fromJS, is  } from "immutable";

const arr = List([1,2,3,45,5]);
const arr3 = arr.push(6);
const arrClone = List([1,2,3,45,5]);

const obj = fromJS({
    name: "chenhuan",
    age: 23,
    boys: ["gi", "linda", "bb"],
    childs: {
        name: "anping",
        ages: [3,4,5,567,6756,765]
    }
});


console.log(obj.getIn(["childs", "ages"]))

console.log(arr3, is(arr, arr3));
console.log(`is equals:`, is(arr, arrClone));

const map = Map({
    name: "chenhuan",
    age: 23
})

console.log(arr);
console.log(map);
console.log(map.get("name"));

Infinity

const name = fromJS("chenhuan");

console.log(name);