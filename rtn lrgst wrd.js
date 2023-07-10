let string = prompt("ENTER THE SENTENCE: ");
let str = string.split(" ");
console.log(str);
let large = str[0].length;
console.log(large); 
for(i=1;i<str.length;i++){
    if(large<str[i].length)
    {
        large=str[i].length;
        big=str[i];
    }
}
console.log(`The largest word in this string is ${big}`);