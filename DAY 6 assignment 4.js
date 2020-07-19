function add(a,b){
    let c = +a + +b;
    return c;
}
function subtract(a,b){
    let c = +a - +b;
    return c;
}
function multiply(a,b){
    let c = +a * +b;
    return c;
}
function divide(a,b){
    let c = +a / +b;
    return c;
}
function modulus(a,b){
    let c = a%b;
    return c;
}
let str = prompt("Enter the expression with single space between operators and operands...eg 2 + 7 if you want the square root enter sqr or enter per for percentage:");
if(str.toLowerCase() == "sqr"){
    num = prompt("Enter the number for which you want square root:");
    console.log(`The square root is ${Math.sqrt(num)}`)
}
else if(str.toLowerCase() == "per"){
    num = prompt("Enter the number for which you want percentage for:");
    let ress = (1/100)*num;
    console.log(`The square root is ${ress}`);
}
else{
let splitstr = str.split(" ");
console.log(splitstr);
if(splitstr[1] == "+"){
    res = add(splitstr[0],splitstr[2]);
    console.log(`The sum of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
else if(splitstr[1] == "-"){
    res = subtract(splitstr[0],splitstr[2]);
    console.log(`The subtraction of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
else if(splitstr[1] == "*"){
    res = multiply(splitstr[0],splitstr[2]);
    console.log(`The multiple of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
else if(splitstr[1] == "/"){
    res = divide(splitstr[0],splitstr[2]);
    console.log(`The quotient of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
else if(splitstr[1] == "%"){
    res = modulus(splitstr[0],splitstr[2]);
    console.log(`The modulus of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
else if(splitstr[1] == "/"){
    res = divide(splitstr[0],splitstr[2]);
    console.log(`The quotient of ${splitstr[0]} and ${splitstr[2]} is ${res}`);
}
}
