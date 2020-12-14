import { sayHi } from "./moves";
import { firstName as name, colorsObj as color, ourFunc } from "./chars";

console.log(sayHi("Deadpool"));
console.log("hellllo");
console.log(`this is from chars.js: first char name is ${name.firstName}. color: ${color.firstColor}`);
console.log(ourFunc.sayGoodBye(name.char2, color.secondColor));
