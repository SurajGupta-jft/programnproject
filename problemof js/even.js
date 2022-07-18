
function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

a=randomNumber(1,10000);
console.log(a)							

 if(a%2==0){
    console.log("a is a even number")
 }
 else{
    console.log("a is not a even number")
 }