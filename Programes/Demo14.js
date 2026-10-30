

function checkEvenOdd(value)
{
  return (value%2==0)
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