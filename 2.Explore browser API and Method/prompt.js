// alert("sob thik to broo");
function showAlert() {
    // alert("kmn aso dosto");
   const decision = confirm("I am confirm");
   console.log(decision);
   if (decision == true) {
    alert("dost 500 taka dhar day");
   }
   else{
    alert("dure gia mor");
   }
}
const getUserInfo = ()=>{
    const name = prompt("Write your name ");
    if (name) {
        alert("his name is ",name);
    }

}