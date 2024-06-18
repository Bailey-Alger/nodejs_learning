// node server (the file name) to run a js file
console.log('Hello World')

// global object instead of window object
// console.log(global);

// has commonJS modules instead of ES6
// uses require intead of import

const os = require('os');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

const path= require('path')
console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))


//const math = require('./math')
const { add, subtract, multiply, divide } = require('./math')
//console.log(math.add(2, 3))
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

// missing some js APIs like fetch