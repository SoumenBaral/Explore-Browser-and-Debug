//We can get undefined of 8 types 
//1. if we declare a variable and not assign any vale then we got undefined 
//2. if we declare a function but not return the vale and assign it in anther variable then we can get the undefined 
//3. Parameter that will not pass the got undefined;
//4. if return nothing have the wright site then we got undefined ;
//5. property that doesn't exist on object that will give undefined ;
//6. accessing the the element the is not in the array .
//7. if delete a array element into the array 
//8. set a value as undefined ;

let x;
// console.log(x);

function soumen( x, y) {
    const result = x+y;
}
const result = soumen(10,20);
console.log(result);


function sum(a, b, c, d) {
    console.log(a,b,c,d);
    return a+b+c+d; 
    
}
sum(10,20)

function mul (a, b){
    if(a>0&&b<0){
        const result = a*b;
        return;
    }
    return a;
}

// const multi = mul(19,-1);
// console.log(multi);
const object = {job:"web developer",position: "Senior dev"};
console.log(object.address);
const arr = [10,20,30,40];
delete arr[1];
console.log(arr[1],arr[100]);
const eight = undefined;
console.log(eight);