let arr = [[1,2,3],[4,5,6],[7,8]];
let k=[];
let large=arr[0][0];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        
        if(large<arr[i][j])
        large=arr[i][j];
    }
    k.push(large);
    large=0
}
console.log(k);