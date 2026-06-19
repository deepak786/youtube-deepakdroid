const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 3;

// 1+3+2=6
// 3+2+6=11
// 2+6-1=7
// 6-1+4

// newSum = oldSum - leavingElement + enteringElement

// O(n*k)
function normalApproach(){
    let maxSum = 0;

    for(let i=0;i<arr.length-k;i++){
        let windowSum = 0;
        for(let j=i;j<i+k;j++){
            windowSum += arr[j];
        }

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(normalApproach());

// O(n)
function optimizedApproach(){
    let windowSum = 0;
    
    for(let i=0;i<k;i++){
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for(let i=k;i<arr.length;i++){
        windowSum = windowSum - arr[i-k] + arr[i];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(optimizedApproach());