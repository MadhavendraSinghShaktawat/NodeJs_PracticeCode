//* ***** Ways of exporting modules in commonJs *****

    //! Single function export 
    //! Object export 
    //! Named function export 
    //! using export shorthand

    

//? Single Function Export
/*
const firstName = 'Alice';
// module.exports = firstName;

//* now creating function
const greet = (name)=>{
    return `Hi ${name}`;
};

module.exports = greet;
*/


//? Object Export
/*
module.exports = {
    add: (a,b)=>{
        return a+b;
    },
    sub: (a,b)=>{
        return a-b;
    }
};
*/


//? Named Function Export
/*
module.exports.sayHi = (name)=>{
    return "Hi";
}
*/

//? Using Exoprt Shorthand 
exports.sayHi = (name)=>{
    return "Hi";
};