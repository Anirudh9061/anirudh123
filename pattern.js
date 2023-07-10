let n =parseInt(prompt("Enter the number of rows: "));
let str="";
for(let i=1;i<=n;i++){
    for(let k=1;k<=i;k++)
    str+=k;
    str+="\n";
}
console.log(str);