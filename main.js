import { pleaseSayHello as hi, szymi } from "./hello.js";
import something from "./szymon.js";
import * as hello from "./hello.js";

console.log(hi("Szymon"));
console.log(szymi);

console.log(something);

console.log(hello.pleaseSayHello());
console.log(hello.szymi);

let isDark = false;

document.documentElement.style.setProperty("--zmienna", "wartość");
const button = document.querySelector(".dark-mode__button--js");
