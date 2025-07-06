const name="shreyasingh"
const repocnt=50

//console.log(name+" "+repocnt+" Value"); old syntax don't prefer using

console.log(`Hello my name is ${name} and my repo count is ${repocnt}`);

console.log(name[0]);
console.log(name.__proto__);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('h'));
const newstr=name.substring(0,4);
console.log(newstr);
const str2=name.slice(0,4);//almost same as substring but negative index can also be given
console.log(str2);

const str3=name.slice(-8,2);
console.log(str3);

const str4="    shreya    "
console.log(str4);
console.log(str4.trim());

const url="https://shreya.com/shreya%20singh"
url.replace('%20','_')
console.log(url.replace('%20','_'));
console.log(url.includes('shreya'));//checks if string shreya is present or not in the url
console.log(name.split('-'));