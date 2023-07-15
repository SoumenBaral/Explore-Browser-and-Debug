
// console.log(1);

// console.log(2);
// setTimeout(()=>{
// console.log(3);
// },3500)
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(10);

const Add200 =()=>{
   const money =  prompt("Give me a number I will return it add 200");
   const parseMoney = parseInt(money);
   const newMoney = parseMoney + 200;
   if(money)alert(`Your New Money is : ${newMoney}`);
   console.log(newMoney);
}
const loc =()=>{
    const isAgree = confirm("Do you want to watch the location");
    console.log(isAgree);
    if(isAgree)alert(location.href);
};
// Cookies :: Cookies is a small data that website can store in browser . we use cookies to 
// tack user activities and and manage there login information if a user login in a browser 
// and then he log out after he can login again via cookies .. and cookies some small amount of
// space to store it we have some type of cookies 1.session Cookies 2.Persistent Cookies
// Uses:: 1.Authentication 2.Personalization 3.Tracking and Analytics 4.Advertising 
// 4.Privacy and Security 5.Legal Regulations 