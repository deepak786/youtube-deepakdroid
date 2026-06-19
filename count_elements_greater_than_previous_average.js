const arr = [100, 200, 150, 300];

let count = 0;
let sum = arr[0];

for (let i = 1; i < arr.length; i++) {
    const avg = sum / i;

    if(arr[i] > avg){
        count++;
    }

    sum += arr[i];
}

console.log("Number of elements:", count);

