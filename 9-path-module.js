const path = require('path')

const pathSep = path.sep
console.log(pathSep);

const filePath = path.join('/content','sub folder','test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absPath = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absPath);
