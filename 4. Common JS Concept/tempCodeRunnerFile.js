//javaScript is a dynamic type variable 
// primitive type variable 
const a = 10;
const b = "ami to val na ";

// Non Primitive type variable ;
const ar = [10, 30,20,40 ,50,60 ,70,80,90];
const obj = {name: "soumen Baral",age:25,education: "Higher secondary"};

console.log(typeof a , typeof b, typeof ar, typeof obj);

// Primitive type js don't take reference

let x = 3;
let y = x;
console.log(x,y);
y = 5;
console.log(x,y);

// Non primitive data take te reference of is assigning value

let p = { job: "web developer "};
let q = p;
console.log(p,q);
q.job = "Backend Developer";
console.log(p,q);