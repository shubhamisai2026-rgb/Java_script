function countsmall(str)
{
    let iCount=0
  for(let i=0;i<str.length;i++)
  {
    if(str[i]>='a' && str[i]<='z')
    {
        iCount++;
    }

  }
  return iCount;
}
function main()
{
 let name="shubham"
 let iRet
 iRet=countsmall(name)
 console.log(iRet)
}
main()