const iterativefunc = function(arr,x)
{
  let start=0,end=arr.length-1;
  while(start<=end)
  {
    let mid = Math.floor((start+end)/2);
    if(arr[mid]==x)
    {
        return true;
    }
    else if(arr[mid]<x) 
    {    
      start = mid+1;
    }
    else
    {
        start = mid-1;
    }
  }
}
let arr = [1,3,2,5,7,9,11,10,32];
let x = 7;
let result = iterativefunc(arr,x);
if(iterativefunc(arr,x,0,arr.length-1))
{
    console.log("Element is present in array at index:"+ result);
}
else
{
    console.log("Element is not present in array");
}

 x = 5;
if(iterativefunc(arr,x,0,arr.length-1))
{
    console.log("Element is present in array at index:"+ result);
}
else
{
    console.log("Element is not present in array");
}