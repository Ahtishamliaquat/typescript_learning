let tuples:[number,string] =[12,"hello"]
let secondElement = tuples[1] //index number find
console.log(secondElement);


// this is a arry 
let fallingResponce=["not found", 404]
console.log(fallingResponce);


// This is tuple 
let passingResponce:[string,number] =["{}",200];


// types of tuple

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
console.log(staff[0]);
