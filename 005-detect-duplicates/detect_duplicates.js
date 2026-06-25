const arr = [1, 2, 3, 4, 5, 2];

// O(n2)
function normalApproach(){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }

    return false;
}

console.log(normalApproach());

// O(n)
function optimizedApproach(){
    const seen = new Set();

    for(let i=0;i<arr.length;i++){
        if(seen.has(arr[i])){
            return true;
        }

        seen.add(arr[i]);
    }

    return false;
}

console.log(optimizedApproach());