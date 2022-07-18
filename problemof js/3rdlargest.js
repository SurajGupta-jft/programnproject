var a=[1,10,8,11,6,9]
var first=a[0];
var second=0;
var third=0;

for(let i=1;i<a.length;i++)
{
    if(a[i]>first){
        third=second;
        second=first;
        first=a[i];
        
    }
    else if(a[i]>second && a[i]<first){
        third=second;
        second=a[i];
    }
    else{
        third=a[i];
    }
}
console.log(third);
