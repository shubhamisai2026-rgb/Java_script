function check(no)
{
    var sum=0
    for(i=0;i<=no/2;i++)
    {
     if(no%i==0)
     {
        sum=sum+i
     }
    }
    if(sum==no)
    {
        return true
    }
    return false;
}

function main()
{
    let bret=false
    bret=check(28)
    if(bret)
    {
        console.log("perfect")
    }
    else
    {
        console.log("not perfect")
    }
}

main()