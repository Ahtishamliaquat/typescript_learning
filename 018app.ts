//  function rest parameter

function restParameter(firName:string, ...restOfName:string[]):string {
    if(restOfName){
        return  firName + " "+ restOfName.join( " ")
    }else{
        return firName
    }
}

restParameter( "Ahtisham", "Ahsan", "umar"," Anees")


// Anonymous funcution With rest parameter

let anonus:(firName:string, ...remaningName: string[]) => string = function(firName:string , ...remaningName:string[]): string{
    return firName +" "+ remaningName.join(" ");
}
anonus( "Ahtisham", "Ahsan", "umar"," Anees")

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list