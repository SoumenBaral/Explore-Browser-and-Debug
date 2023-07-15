const GetValues = id =>{
    const Input = document.getElementById(id);
    const InputVal = Input.value;
    Input.value = '';
    return InputVal;
}
const setInLocalStorage = (key,val)=>{
    localStorage.setItem(key,val);
}

document.getElementById("d_name").addEventListener("click",function(){
    localStorage.removeItem("Name");
   
})
document.getElementById("S_name").addEventListener("click",function(){
    const Input = GetValues('Id_name');
    setInLocalStorage("Name",Input);
    console.log(Input);
})


document.getElementById("d_email").addEventListener("click",function(){
    localStorage.removeItem("Email");
   
   
})
document.getElementById("S_email").addEventListener("click",function(){
    const Input = GetValues('Id_email');
    setInLocalStorage("Email",Input);
    console.log(Input);
})
document.getElementById("d_message").addEventListener("click",function(){
    localStorage.removeItem("Message");
   
})
document.getElementById("s_message").addEventListener("click",function(){
    const Input = GetValues('Id_message');
    setInLocalStorage("Message",Input);
    console.log(Input);
})

const reset = ()=>{
    localStorage.clear();
}