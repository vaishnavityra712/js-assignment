let name = prompt("enter the name","mac os");
let version = Number(prompt("0"));

let OSname = function(name="mac os",version="0"){
    let sentance =(name+ " "+version); 
    return sentance ;
}
let result = OSname("The OS name is"+name+"and version is"+version);
console.log(result);
