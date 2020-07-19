while(1){
    let num = (prompt("enter a number greater than 100"));
    let res = (Number(num)>= 100)? true : false;
    if(res==true){
        console.log(`The number entered is ${num}`);
        break;
    }
    else if (num == null) {
        break;
    }
}