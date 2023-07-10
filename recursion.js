let n=parseFloat(prompt("ENTER THE NUMBER: "));
let Fact=(num)=>{
    if(num==0||num==1)
    return 1;
    else
    return num * Fact(num-1);
}
console.log(Fact(n));