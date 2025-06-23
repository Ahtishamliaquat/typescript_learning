//     structural typing  if structure are same they will be equal

interface Ball {
    diameter: number
}
interface Sphere{
    diameter: number;
}



let ball:Ball={
    diameter: 20
}
let sphere:Sphere={
    diameter: 40
}

// Ball = Sphere
//  Sphere = Ball


//   if structure are same and one side interface 3 items and other side 2
//   then other interface is equal to one but one is not equal other

interface one {
    diameter: number,
    metrial: string,
    quality: string
}

interface other {
    diameter: number,
    metrial: string
}

let plasticpipe:one={
    diameter: 20,
    metrial: "solid",
    quality: "Good"
}
let plasticpipe1: other={
    diameter: 20,
    metrial: " solid"
}


// other = one
// one != other     because  one have more arrgument  then other