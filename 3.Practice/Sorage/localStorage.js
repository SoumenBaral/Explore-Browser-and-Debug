const addShakib = ()=>{
    localStorage.setItem("name","shakib Khan");
    localStorage.setItem("age",45);
   

}
const Name = localStorage.getItem("name");
const age = localStorage.getItem('age');
 x = document.getElementById('name');
x.innerText = `${Name} 
Age: ${age}`;
console.log(Name);