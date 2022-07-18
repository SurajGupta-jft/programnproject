const str1 = "my name is";
var n= str1.length;
var str2=" ";
var str3=" ";

for(let i=0;i<n;i++)
{
    if(str1[i]==" ")
    {    
        for(let j=str2.length-1;j>=0;j--)
        {
            str3+=str2[j];
        }
        str3+= " ";
    }

    
 str2+= str1[i];
   
}
console.log(str3);