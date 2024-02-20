//node main-calc-1.js 7 3

const math = require("./lib-calc.js");

if (process.argv[2] && process.argv[3]) {
    console.log(math.add(Number(process.argv[2]), Number(process.argv[3])));
}
