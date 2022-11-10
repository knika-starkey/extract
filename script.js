"use strict";
let longStr =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum ad minima cum in tempore voluptatibus, dolorem ea maiores nam eligendi ut nihil, fugiat quos sapiente enim ullam? Deleniti, alias.";
let shortStr = "Lorem ipsum dolor";

function preview(str, n) {
  let res = "";
  if (str.length > n) {
    res = str.slice(0, n);
    //console.log(str.charCodeAt(n + 1));
    if (str.charCodeAt(n + 1) != " ") {
      res = res.slice(0, res.lastIndexOf(" "));
    }
    res += "...";
    return res;
  }
  return str;
}
console.log(preview(shortStr, 20));
console.log(preview(longStr, 26));
