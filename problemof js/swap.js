var a=100;
var b=15;
var n=Math.abs(b-a)
if(a>b)
{
for(let i=0;i<n;i++)
    {
        a--;
        b++;  
    }
} 
else
{
for(let i=0;i<n;i++)
    {
        a++;
        b--;  
    }  
}

console.log(a,b);