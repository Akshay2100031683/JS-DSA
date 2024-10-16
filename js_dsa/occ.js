
function RepNumbers(arr, x)
{
    let res=0;
    for(let i=0;i<arr.length;i++)
    {
       if(x == arr[i])
       {
        res++;
       }
       
    }
    return res;
}
let arr = [1, 2, 3, 2, 1, 1];
let x = 1;
console.log(RepNumbers(arr, x));