//   All parameter must required

// Named function

function abc (a:number , b: number): number{
    return (a+b)
}
abc(2,5)    // function called
 


// Anonymous function 

let xyz = function (a:number, b:number):number{
    return a+b
}

// Anonymous function with explict type
let explict: (a:number , b: number)=>  number = function (a:number, b : number):number{ return a+b}

//Type  name donot matter

let typeName:(alpa:number, beta:number)=> number = function(x:number, y:number):number{return x+y}

// Lamda function

let Lamda=(q:number , p:number) => q+p


