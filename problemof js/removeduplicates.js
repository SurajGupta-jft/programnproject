var a=[1,1,2,3,3,3,4,4,5,5,5,5,5,6,5,7,9,3,5,2]
var c=[]
count=0

for(let i=0;i<a.length;i++){
    for(let j=1;j<a.length;j++)
    {
    if(a[i]!=a[j])
    {   
        count=1;
    
    }}

    if(count==1)
    {
     c.push(a[i]);
     

    }
}
console.log(c)

