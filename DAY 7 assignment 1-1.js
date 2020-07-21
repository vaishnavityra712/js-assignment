//takes a positive number from the user.
function positivenumber(num) {
    let result;
    if(num>=0){
        result = true;
    }else if (num<0) {
        result = false;
    }
    return result;
}
 let num;
 num = Number(prompt("enter a number"));
 