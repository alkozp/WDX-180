//node main-calc-2.js 7 3 add
//node main-calc-2.js 7 3 sub
//node main-calc-2.js 7 3 mul
//node main-calc-2.js 7 3 div

const math = require("./lib-calc.js");

if ((process.argv[2] && process.argv[3] && process.argv[4]) && (math[process.argv[4]])) {

    console.log(math[process.argv[4]](Number(process.argv[2]), Number(process.argv[3])));
}
