var a=[1,1,2,3,3,3,4,4,5,5,5,5,5,6,5,7,9,3,5,2]

var c=a.sort();
console.log(a)
let count=1;

for(let i=0;i<c.length;i++){
    if(c[i]==c[i+1]){
        count=count+1;

    }
    else{
        console.log(c[i],count);
        count=1;
    }
}