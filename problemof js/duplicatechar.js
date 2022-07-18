var s="abbbbbb"
var count=0;
if(s.length==0){
    console.log("empty string");
}

for(let i=0;i<s.length;i++){

    if(s[i]==s[i+1] && s[i+1]!=s[i+2])
    {
        console.log(s[i]);
    }

}