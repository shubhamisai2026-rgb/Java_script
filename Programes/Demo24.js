function main()
{
    let no=11
    let i=89.90
    let str="jay ganesh"
    let arr=[1,2,3,4,5,6]

    console.log(typeof i)
    console.log(typeof no)
    console.log(typeof str)
    console.log(typeof arr)

    console.log(arr.length)

    let iSum=0
    i=0
    for(i=0;i<arr.length;i++)
    {
        iSum=iSum+arr[i]
    }
    console.log("summation:"+iSum)
}
main()