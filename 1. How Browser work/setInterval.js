console.log(1);
console.log(3);
let seconds = 0;
const InterVelID = setInterval(()=>{
    console.log(++seconds);
    if (seconds == 10) {
        clearInterval(InterVelID);
    }
},500);
console.log(1);
console.log(3);