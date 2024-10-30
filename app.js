var num1 = Number(prompt("enter 1st digit !"));
var opr = prompt("enter operator !");
var num2 = Number(prompt("enter 2nd digit !"));
var result;    

if(opr === "+"){
    result = num1 + num2; 
}else if(opr === "-"){
    result = num1 - num2; 
}else if(opr === "*"){
    result = num1 * num2; 
}else if(opr === "/"){
    result = num1 / num2; 
}else if(opr ==="%"){
    result = num1 % num2
}
else{
    console.log("try-again operator are incorrect");
}

if(result){
    console.log("your answer :" + " " ,result);
}else{
    console.log("no result found ! ");
}