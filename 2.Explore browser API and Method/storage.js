document.getElementById("add_LS").addEventListener("click",function(){
    const input =  document.getElementById("get_name");
    console.log(input.value);
    localStorage.setItem("name",input.value);
    input.value = "";
    
})
document.getElementById("Remove_LS").addEventListener('click',function(){
    localStorage.removeItem("name")
})
document.getElementById("add_LS_age").addEventListener("click",function(){
    const input =  document.getElementById("get_age");
    console.log(input.value);
    localStorage.setItem("Age",input.value);
    input.value = "";
    
})
document.getElementById("Remove_LS_age").addEventListener('click',function(){
    localStorage.removeItem("Age")
})
document.getElementById("clear").addEventListener('click',function(){
    localStorage.clear();
})