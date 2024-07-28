// we have to use mjs extension if we want to use ES module

//* Total 4 types of Es module export
//! Default export
//! Named export
//! Mixed export[ Default + Named ]
//! Export everything

// import greet from './utills.mjs';         // importing Default export
// import {add} from './utills.mjs';         // importing Named export
// import greet, {add} from './utills.mjs';  // importing Mixed export
import * as utills from './utills.mjs';


console.log(utills.greet("Madhav"));
console.log(utills.add(10,2));