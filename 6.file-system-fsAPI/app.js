/*
// const { log } = require('console');
const fs = require('fs');
// console.log(fs);

//! Reading a file

//? Synchronous way

const dataBuffer = fs.readFileSync("./sample.txt");
console.log(dataBuffer);    // here we will get buffer as input

const content = dataBuffer.toString();
console.log(content);
console.log('**************************');


//? Asynchronous way

fs.readFile('./sample.txt', 'utf-8', (err, content)=>{
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log(content);
        console.log('******************************');
    }
});


//! Writing in a file

fs.writeFile('./new.txt', 'Hii there this is new text i want to write', (err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('File has successfully writen');
        console.log(('****************************'));
    }
})


//! Appending a file

fs.appendFile('./new.txt', 'Appended content', (err)=>{
    if (err) {
        console.log(err);
        return;
    }else{
        console.log("File has successfully appended");
        console.log("**----------**********");
    }
})


//! Checking if a file already exists

fs.access('./newa.txt', fs.constants.F_OK, (err)=>{
    if(err){
        console.log('File not exists');
        console.log('*****************************');

    }else{
        console.log('File exists');
        console.log('*****************************');
    }
});


//! Deleting a file

fs.unlink('./delete-sample.txt', (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("File had been deleted");
        console.log('---------------------');
    }
});
*/

//! We can use PROMISES in fs

//* importing fs with promise

const fs2 = require('fs/promises');
let path = './new.txt';

const readFileContent = async (path)=>{
    try {
        const content = await fs2.readFile(path, 'utf-8');
        console.log(content);
        console.log('++++++++++++++++++');
    } catch (error) {
        console.log(error);
    }
}

readFileContent(path);