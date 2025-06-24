enum Colors {red, blue, green}  // the index will be started with 0
let c:Colors = Colors.blue
console.log(c);


enum Color{ red = 1, blue, green}  // when you assigned index value they started with assigened value
let d:Color = Color.blue
console.log(d);

enum col{ red = 2 , blue = 4 , green = 5}  // when you assigned any value in every perameter then they assigned those value you assigned

let e= col.green
console.log(e);
