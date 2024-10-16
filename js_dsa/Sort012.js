function SortingNum(arr)
{
    let c0 = 0, c1 = 0, c2 = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i] == 0)
        {
            c0 += 1;
        }
        else if(arr[i] == 1)
        {
            c1 += 1;
        }
        else{
            c2 += 1;
        }
    }
    let idx = 0;
    for(i=0;i<=c0;i++)
    {
        arr[idx++] = 0;
    }
    for(i=0;i<=c1;i++)
    {
        arr[idx++] = 1;
    }
    for(i=0;i<=c2;i++)
    {
        arr[idx++] = 2;
    }
}
let arr = [1,1,2,1,2,1,0,0,2,1,0,1];
SortingNum(arr);
console.log(arr.join(' '));