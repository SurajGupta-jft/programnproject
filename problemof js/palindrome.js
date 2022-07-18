var num="1211"
const n =num.length;
var ans="";
for(let i=n-1;i>=0;i--){
    ans+=num[i];

}
console.log(ans)


if(ans==num){
    ans="true";
}
else{
     ans= "false";
}


console.log(ans)