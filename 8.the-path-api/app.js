//! Importing path module
const path = require('path');
// console.log(path);

const dot = '-------------------';
const path1 = 'D:\Madhav\Learning\Nodejs\NodeJs_PracticeCode';
const path2 = 'D:\Madhav\Learning\Nodejs\NodeJs_PracticeCode\a.txt';

//* To check last part of the path
console.log(dot);
const filename = path.basename('./sample.txt');
console.log('FileName: ', filename);
console.log(dot);


//* To check directory name
console.log('Directory: ', path.dirname(path1));
console.log(dot);

//* To check extension name
const extension = path.extname(path2);
console.log(`You are using '${extension}' extension.`);
console.log(dot);

//* To join multiple path segments together
const jPath = path.join(path1, path2);
const jPath1 = path.join('hii', 'test', 'best.txt');
console.log(jPath);
console.log(dot);
console.log(jPath1);
console.log(dot);

//* To resolve sequence of path into an absolute path
const absolutePath = path.resolve('test', 'bro')
console.log(absolutePath);
console.log(dot);

//* To check if path is absolute
const isAbs = path.isAbsolute('./User/test');
const isAbs1 = path.isAbsolute(path1);
console.log(isAbs);
console.log(isAbs1);
console.log(dot);