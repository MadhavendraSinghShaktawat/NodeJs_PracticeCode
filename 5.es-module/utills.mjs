// we have to use mjs extension if we want to use ES module

//* Total 4 types of Es module export
//! Default export
//! Named export
//! Mixed export[ Default + Named ]
//! Export everything


//? Default export
/*
export default function (name){
    return `Hello ${name}`;
}
*/

//? Named export
/*
export function add(a,b){
    return a+b;
};
*/

//? Mixed export
/*
export default function (name){
    return `Hello ${name}`;
}

export function add(a,b){
    return a+b;
};
*/

//? Export everything
export function greet(name){
    return `Hello ${name}`;
}

export function add(a,b){
    return a+b;
};