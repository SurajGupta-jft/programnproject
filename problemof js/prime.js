
function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

a=randomNumber(1,10);

var ans=a+ " is a prime number"							
for(let i=2;i<a;i++){
 if(a%i==0){
     ans=a + " is not a prime number"
    
    //console.log("a is not a prime number")
 }
 
}
console.log(ans);