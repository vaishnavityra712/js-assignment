let marks = Number(prompt("enter the marks","0"));
if(marks == 50){
    console.log("Marks are" +50+ "and grade is A");
}
else if (marks<=49 && marks>=39) {
    console.log("Marks are"+marks+"and grade is B");
} 
else if (marks<39 && marks>=29) {
    console.log("Marks are"+marks+"and grade is C");
}   
else if (marks<29 && marks>=15) {
    console.log("Marks are"+marks+"and grade is D");
    
}
else if (marks<15) {
    console.log("Marks are"+marks+"and grade is E");
    
}
else if (marks !==(marks>=60)) {
    
} else {
    console.log("Marks are"+marks+"and grade is F");
    
} 