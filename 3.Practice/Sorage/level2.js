// localStorage.setItem("count",0);
let val = localStorage.getItem("count");
const IncreaseValue = document.getElementById('count');
    IncreaseValue.innerText = val;

const Increase = () =>{
    val++;
    console.log(val);
    const IncreaseValue = document.getElementById('count');
    IncreaseValue.innerText = val;
localStorage.setItem("count",val);

}
console.log(val);