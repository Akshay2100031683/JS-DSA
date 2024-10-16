const prompt = require("prompt-sync")();
function occurences(arr, a, y)
{
    let res = 0;
    for(var i=0;i<a;i++)
    {
        if(y == arr[i]);
          res++;
    }
    return res;
}

let arr = prompt("enter the array (comma-separated):");
let newarr  = arr.split(',');// converts into the array of strings
let ARRAY  = newarr.map(Number.parseInt);//converts into array of numbers
let a = ARRAY.length;
let y = parseInt(prompt("enter the number to count:"));
console.log(`The element ${y} occurs ${occurences(ARRAY, y)} times in the array.`);