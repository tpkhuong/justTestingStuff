import { default as sayHi } from "./moves";
import { firstName as name, colorsObj as color, ourFunc } from "./chars";

console.log(sayHi("Deadpool"));
console.log(`this is from chars.js: first char name is ${name.firstName}. color: ${color.firstColor}`);
console.log(`calling function from chars.js ${ourFunc.sayGoodBye(name.char2, color.secondColor)}`);
