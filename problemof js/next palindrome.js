var num=1998;
var ans="";
var b=" "
function check(num){
 b=num.toString();
const n =b.length;
for(let i=n-1;i>=0;i--){
    ans+=b[i];
}

if(ans==b){
    ans=b;
    return ans;
}
else{
     check(num+1);
     
}
}

console.log(check(num));