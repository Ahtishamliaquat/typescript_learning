//    Overloads functions

function add(arg1:string , arg2:string):string            //option1
function add(arg1:number , arg2:number):number            //option2
function add(arg1:boolean , arg2:boolean):boolean         //option3
function add(arg1:undefined , arg2:undefined):undefined   //option4
         
          // So on

//this is not part of the overload list, 
//so it has only three overloads
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}


add("Ahtisham","ali")
add(1,4)
add(true,false) 
// add(null,undefined)  // given error because this type of overload note made 
