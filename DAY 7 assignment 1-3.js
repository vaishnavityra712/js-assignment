// Use higher order function to filter the odd numbers.
let array = [];
let n = Number(prompt("enter a number"));
for (let i = 0; i<= n; i++) {
    array.push(i);
    
}
console.log(array);
let odd = array.filter(el=>el%2!==0);
console.log(odd);