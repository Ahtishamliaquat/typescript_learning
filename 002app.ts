            //Strong typed syntax
 let e: boolean = true;
 let f: number = 42;
 let g: string = "TypeScript is great!";
    console.log(e, f, g);

            //  type inference
            let h = true;
            let i = 42;
            let j = "TypeScript is awesome!";
            console.log(h, i, j);








            //use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " );// Error: z is not defined in this scope