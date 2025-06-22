let myName: string|null;

myName= null;
console.log(myName);

myName= "Ahtisham";
console.log(myName);

    // myName= undefined //Error
    // myName= 22 //Error


let myAge: number | string;

myAge = 22 // narrowing
console.log(myAge);

    // console.log(myAge.toLowerCase());  //Error

myAge = "I dont know" //narrowing
console.log(myAge);

console.log(myAge.toString()); // He give the promotion becouse its narrowing;
console.log(myAge.toLowerCase()); // it Also possible




 let newAge =  Math.random() > 0.6 ? "khan": 60 ;
 newAge.toLocaleString();
 
 if(newAge === "khan"){
    newAge.toUpperCase()
 }
 

 if(typeof newAge === "string"){
    newAge.toUpperCase()
 }

 

 typeof newAge === "string"
 ? newAge.toUpperCase()
 : newAge.toFixed()



 let age : number| "deid"| undefined

//   age = 12; // ok
//   age = "deid"; // ok 
//   age = "living" // error
//   age = undefined // ok

let yourName = Math.random() > 0.7 ? "Ahtisham" : undefined;

 //   yourName.toUpperCase //Error
yourName?.toUpperCase // ok

if (yourName) {
    yourName.toUpperCase
}     // ok