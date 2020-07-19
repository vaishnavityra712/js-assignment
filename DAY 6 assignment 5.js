let sales = prompt("enter the number of sales:");
comission = 0
if(sales>0 && sales<=5000){
    comission = (2/100)*sales;
}
else if (sales>5000 && sales<=10000) {
    comission = (5/100)*sales;
} 
else if (sales<10000 && sales<=20000) {
    comission = (7/100)*sales;
}
else if (sales>20000) {
    comission = (10/100)*sales;
}
comLog = Math.log(comission);
console.log(`comission is ${comission} ,and the log is ${comLog}.`);