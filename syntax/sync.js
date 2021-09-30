var fs = require('fs')

// readFileSync
console.log('readFileSync')
console.log('a')
var result = fs.readFileSync('syntax/sample.txt', 'utf-8')
console.log(result)
console.log('c')

console.log('readFile')
console.log('a')
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result) {
  console.log(result)
})
console.log('c')
