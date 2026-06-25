const arr = [2, 7, 14, 11, 4, 9, 8, 5, 3];
const target = 8;

function simpleApproach(){
    for(let i = 0; i< arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }
}

console.log(simpleApproach());

function optimizedApproach(){
    const map = new Map();

    for(let i = 0; i< arr.length; i++){
        const complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }
}

console.log(optimizedApproach());