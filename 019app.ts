//            callback function

// ek function ky parameter my dusray Arrow function ko call karnay ko callback function katay hy 
function operation(callback:any){
    callback()
}
let text=()=>{
    console.log("hello callback function");
}
operation(text)



//            miner dificult

function operat(callback:any){
    callback("Ahtisham")
}
let adding =(name:string) =>{
console.log(` welcome ${name}`);
}
operat(adding)



//          Advance callback function

function withName(callback:any,newName:string){
    callback(newName)
}
let write= (name:string)=>{
    console.log(`Hello ${name}`);
}
withName(write,"Ahtisham")




//  callback function  with Anonymous function
let calculater= (a:number ,b:number, operations:any)=>{
    return operations(a,b)
}
let result = calculater(3, 4 , function(num1:number, num2:number){
    return num1 + num2
})
console.log(result);

