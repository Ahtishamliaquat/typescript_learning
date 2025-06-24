
//    Any,   unknown , never Types

                            

                      //  Any


let val: any             //Ok no error found               
val: undefined;          //Ok no error found
val: true;               //Ok no error found
val: 20                  //Ok no error found
val: "abc"               //Ok no error found
val: {}                  //Ok no error found
val: []                  //Ok no error found
val: ()=>{console.log("hello");}             //Ok no error found
val: Math.random()       //Ok no error found
val: null                //Ok no error found

                    //   unknown



let val1: unknown;

val1: undefined;          //Ok no error found
val1: true;               //Ok no error found
val1: 20                  //Ok no error found
val1: "abc"               //Ok no error found
val1: {}                  //Ok no error found
val1: []                  //Ok no error found
val1: ()=>{console.log("hello");}             //Ok no error found
val1: Math.random()       //Ok no error found
val1: null                //Ok no error found



//  Assigned a value of type unknown to variable to other types

let vel: unknown;

// const vall: unknown = vel;                       // OK
// const val2: any = vel;                           // OK
//      const val3: boolean = vel;                  // Will throw error
//      const val4: number = vel;                   // Will throw error
//      const val5: string = vel;                   // Will throw error
//      const val6: Record<string, any> = vel;      // Will throw error
//      const val7: any[] = vel;                    // Will throw error
//      const val8: (...args: any[]) => void = vel; // Will throw error

                          
                       
                             // never
                             
//   infered function  
function ok (){
    return ok();
    
}                             
                             
                             
// function return never 
function test(message:string):never {
    return test("hello world")
}
test("Welcome")


//  function return never but not  ending point

function infinite():never{
    while (true) {
        console.log("hello world");
        
    }
}

