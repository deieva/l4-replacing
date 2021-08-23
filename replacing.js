let str = "Mr Blue has a blue house and a blue car.";
let strRed = str.replace(/blue/g, "red");

let strRedUppercase = strRed.replace(/Blue/, "Red");
console.log(strRedUppercase);