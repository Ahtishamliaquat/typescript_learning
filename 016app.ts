// Name function with optional parameter 

function nameRequired(firstName: string, lastName?: string):string{
    if(lastName){
        return  firstName +" "+ lastName
    }else{
        return firstName
    }
}


// Anonymous function with optional parameter

let enterNamed :(firstName:string , lastName?: string) => string = function (firstName:string, lastName?:string):string{
    if(lastName){
        return firstName +""+ lastName
    }else{
        return firstName
    }
} 
enterNamed("Ahtisham",)