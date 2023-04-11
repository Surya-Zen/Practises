//SPREAD:

let arr = [1, 2, 8, 5];

let sum = function(a, b, c, d){
    return (a + b) - (c - d);
}
console.log(sum(...arr));

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

