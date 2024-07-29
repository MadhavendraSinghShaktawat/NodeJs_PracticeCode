//! Importing OS using CommonJS

const { log } = require('console');
const os = require('os');
// console.log(os);

const dot = '****************************'


//* To check system architecture
const archi = os.arch();
console.log('CPU Architecture: ', archi);
console.log(dot);

//* To check information about CPU
const cInfo = os.cpus();
// console.log('CPU information = ', cInfo);
// console.log(dot);

//* os.endianness()
const endi = os.endianness();
console.log(endi);
console.log(dot);

//* To check free memory
const fMem = os.freemem();
console.log('Free memory: ', fMem);
console.log(dot);

//* To chechk home directory
console.log('Home dir: ', os.homedir());
console.log(dot);

//* To check hostName
console.log('Hostname: ', os.hostname());
console.log(dot);

//* To check average load of [1, 5, 15] minutes
console.log('Load average: ', os.loadavg());
console.log(dot);

//* To check network interfaces
// console.log("Networks: ", os.networkInterfaces());
// console.log(dot);

//* To check which platform?
console.log('Your Platform: ', os.platform());
console.log(dot);

//* To check os release version
console.log("OS release version", os.release());
console.log(dot);

//* To check total system memory in byte
console.log('Total memory: ', os.totalmem());
console.log(dot);

