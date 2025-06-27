//  promises  with function

function delay(milliseconds:number): Promise<void>{
    return new Promise((resolve, error)=>{
        setTimeout(()=>{
            resolve()
            error()
        },milliseconds)
    })
}
delay(2000)
.then(()=>{
    console.log("The delay is over");  
})
.catch((error)=>{
    console.log("Someting went wrong", error);  
})
.finally(()=>{
    console.log("This always executed");
})

