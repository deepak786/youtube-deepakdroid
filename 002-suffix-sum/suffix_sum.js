// [1, 2, 3, 4] -> [10, 9, 7, 4]

const arr = [1, 2, 3, 4];
const result = [];
let sum = 0;

// for(let i=0;i<arr.length;i++) {
//     let sum = 0;
//     for(let j=i;j<arr.length;j++){
//         sum += arr[j];
//     }

//     result.push(sum);
// }

for(let i=arr.length - 1; i>=0;i--){
    sum += arr[i];
    result[i] = sum;
}

console.log("Updated Array: ", result);


