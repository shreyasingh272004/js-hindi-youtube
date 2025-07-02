let value=3
let negvalue=-value;
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello"
let str2="world"
let str3=str1+str2
console.log(str3);
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+"2");//12
console.log(1+2+"3");//33

//tricky conversions

console.log(true);//true
console.log(+true);//1

let num1,num2,num3
num1=num2=num3=2+2

let cnt=100
cnt++;
console.log(cnt);

let x=1
++x;//2
x++;//3
console.log(x);

//comaprisons

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//console.log("2">1);//error string can't be compared with int

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);


//strict check-  ===
/* strict check will check the number as well as data type both should be equal nd same */



console.log("2"===2);