//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)

// named function 

function defaultParameter(fName:string, lName = "Rajput"):string{
    return fName +" "+lName
}
defaultParameter("Ahtisham")