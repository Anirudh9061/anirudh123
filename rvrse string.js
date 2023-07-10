let str=prompt("ENTER THE WORDS: ");
let string = str.split(" ");
let length= string.length;
let a="";
for(i=0;i<length;i++){
    let temp=string[i].split("").reverse().join("");
    a+=temp;
    a+=" "; 
}
console.log(a);