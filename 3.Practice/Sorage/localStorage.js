const addShakib = ()=>{
    localStorage.setItem("name","shakib Khan");
    localStorage.setItem("age",45);
   

}
const Names = localStorage.getItem("name");
const age = localStorage.getItem('age');
 x = document.getElementById('name');
x.innerText = `${Names} 
Age: ${age}`;
console.log(Names);

const saveName = localStorage.getItem("Full_Name");
let Name = {};
if(saveName){
    Name = JSON.parse(saveName);
}

Name['fistName ' ] ="soumen";
Name['SecondName ' ] ="Baral";

const CartStringify = JSON.stringify(Name);
localStorage.setItem('Full_Name', CartStringify);