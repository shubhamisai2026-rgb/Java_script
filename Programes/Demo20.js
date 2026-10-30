function digits(no)
{
    let digit=0
    let sum=0
    while(no!=0)
    {
       digit=no%10
       sum=sum+digit
       no=Math.trunc(no/10)
    }
    return sum
}

function main()
{
    let res
    res=digits(112)
    console.log(res)
}
main()