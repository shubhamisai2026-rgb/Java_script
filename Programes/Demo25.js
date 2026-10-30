function display(arr)
{
   let iSum=0
    i=0
    for(i=0;i<arr.length;i++)
    {
        iSum=iSum+arr[i]
    }
    return iSum
}
function main()
{
    let arr=[1,2,3,4,5,6]
 iRet=display(arr)
 console.log(iRet)
}
main()