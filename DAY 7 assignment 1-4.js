//Generate an array of the cubes of the filtered numbers.
let array = [];
let n = Number(prompt("enter a number"));
for (let i = 0; i<= n; i++) {
    array.push(i);
    
}
console.log(array);
let odd = array.filter(el=>el%2!==0);
let cubes = array.filter(el=>el%2!==0).map(el=>el**3);
console.log(odd);
console.log(cubes);