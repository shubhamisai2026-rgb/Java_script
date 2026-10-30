function checkEvenOdd(value)
{
    if(value%2==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    
}
function main()
{
let no=12
let bret=false
bret=checkEvenOdd(no)
if(bret)
{
    console.log(`${no} even`)
}
else
{
      console.log(`${no}odd`)
}

}
main()