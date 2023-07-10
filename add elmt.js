let a=[0,1,2,3,4,5];
console.log(a);
let pos=parseInt(prompt("Which position do you want to enter the next element: "));
let element=parseInt(prompt("Enter the element: "));
if(pos===0)
{
    a.unshift(0,element);
    console.log(a); 
}
else if(pos===6)
{
    a.push(element);
    console.log(a);
}
else{
    var b = a.slice(0, pos);
    b.push(element);
    b = b.concat(a.slice(pos, 6));
    console.log(b);
  
}