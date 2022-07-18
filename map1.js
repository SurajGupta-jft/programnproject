var a={
    Developer: 5,
    Designer: 3,
    QA: 4,
    Manager: 1
    }

   var b=[];
   var c=[]
for(const key in a){
    while(a[key]!=0){
     b.push(key)
    a[key]--
    }
    c.push(b)
    

}
console.log([c])