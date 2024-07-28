/*
    *************** Notes ***************

        - 'global': Refrence to global object itself.
        - '__dirname': String representing current directory.
        - '__filename': String representing file name.
        - 'clearInterval()': Clears Interval.
        - 'clearTimeout()': Clears Timeout.
        - 'setInterval()': Sets a function to be called repeatedly after a set period.
        - 'setTimeout()': Sets a function to be called after a set period.
        - 'console': Refrence to console module for stdout and stderr.
        - 'process': Provides info and control over the current Node.js process.

*/

/*
//*--- Accessing the global objest ---
console.log(global);

//*--- Adding variable into the global object ---
global.myGlobal = 'Hii there';
console.log(global);
console.log(global.myGlobal);

//* To check if our variable is truely global
console.log('myGlobal' in global);
console.log('************************************');


console.log(__filename);
console.log('************************************');


console.log(__dirname);
console.log('************************************');
*/


//! Using 'setInterval' and 'clearInterval'
let count = 0;
const intervalID = setInterval(()=>{
    console.log("Hello World");
    count++
    if (count===5) {
        clearInterval(intervalID);
    }
}, 1000);

//! Using 'setTimeout'
setTimeout(()=>{
    console.log('This message will delayed by 6 sec');
}, 6000)