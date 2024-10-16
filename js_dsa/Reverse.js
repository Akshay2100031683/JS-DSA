function ReverseArray(arr, start, end)
{
    while(start < end)
    {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
}
function PrintArray(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}
let arr = [1,2,3,4,5,6];
    let n = arr.length;
    console.log("enter the array:");
    PrintArray(arr);
    ReverseArray(arr, 0,n-1);
    console.log("enter the reversed array:");
    PrintArray(arr);
