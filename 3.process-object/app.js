/*
    ***************** Notes *****************

        - `process.exit()`: Terminate Node.js process.
        - `process.cwd()`: Get current working directory.
        - `process.chdir(directory)`: Change working directory.
        - `process.nextTick(callback)`: Execute callback on the "next tick".
        - `process.hrtime()`: Get high-resolution timestamp.
        - `process.memoryUsage()`: Retrieve memory usage info.
        - `process.uptime()`: Get process runtime in seconds.
        - `process.kill(pid, [signal])`: Send signal to a process (default is SIGTERM).

*/

//* Analyzing process
// console.log(process);

//Environment variable
// console.log(process.env);

//* We add change our environment

//* Accessing environment variable
const appEnv = process.env.APP_ENV || 'development';

//* Displaying our environment
console.log(`My project is working on ${appEnv} environment`);

//* To change environment name
//! '$env:APP_ENV="abc"' we have to use it in terminal

//! process.exit()
//* Check the current environment using the 'NODE_ENV' environment variable

console.log(process.env.NODE_ENV);
// it will do undefined because we haven't setup our environment yet
/*
if (process.env.NODE_ENV != 'production') {
    // mimicking error
    console.log('This script will run only in production env');
    process.exit();
}
*/

//? 'process.cwd()' and 'process.chdir(dir)'

//* log current working directory of the process
console.log(`current working directory of the process is ${process.cwd()}`);

//* changing current directory

try {
    process.chdir('/temp');
} catch (err) {
    console.log(`Something happened ${err}`);
}