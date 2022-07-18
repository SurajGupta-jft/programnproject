var a=[];
for(let i=0;i<100;i++){
     a[i]=i+1 
}
console.log(a);
function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
j=randomNumber(0,99)
a[j]=0;

for(let i=0;i<100;i++){
    if(a[i]==0){
        console.log(i+1)
    }
}
console.log(j+1);
