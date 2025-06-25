        //    Arry in typescript
    
let arry1 = [1,2,3,456, 8]  // simple arry  type allies arry
console.log(arry1);
console.log(arry1[3]);  //index define



let arry2 : number[] = [1,2,3,4,789,]     // define arry   or  typescript arry 
console.log(arry2);


let arry3 = [123,"abc", true]    // multi Arry with  type allies
console.log(arry3);


let arry4 : (number|string|boolean)[] = [123,"abc", true]    // multi Arry with define type
console.log(arry4);

const arry5 : Array<number>= [1,2,3,]  //alternative correct syntex
console.log(arry5[3]);

const arry6: number[] = [] // empty arry

let arry7: number[]= []
console.log(arry7.push(1,4,5,6,9));  // dynamically adding

