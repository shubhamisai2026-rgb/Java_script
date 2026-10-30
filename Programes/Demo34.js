class Demo
{
    constructor(a,b)
    {
        this.no1=a;
        this.no2=b;
    }
    add()
    {
      return this.no1+no2
    }
     sub()
    {
      return no1+no2
    }
}
function main()
{
    let aobj=new Demo(11,23);
    console.log(aobj.add())
    console.log(aobj.sub())
}
main()