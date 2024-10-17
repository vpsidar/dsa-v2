/*
Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.
*/
let n = 5;
let arr = [1,2,3,5];
function bruteForce(nums, n){
    for(let i = 1; i<= n; i++){
        let findNo = false;
        for(let j = 0; j< nums.length; j++){
            if(nums[j] == i) {
                findNo = true;
                break;
            }
        }
        if(findNo == false) {
            return i;
        }
    }
}
console.log(bruteForce(arr, n))

function betterSol(nums, n) {
    //using hashing 
    const hashArray = Array(n).fill(0);
    for(let i = 0; i < nums.length; i++){
        hashArray[nums[i]] = 1;
    }
    for(let j = 1; j<hashArray.length; j++) {
        if(hashArray[j] == 0) return j;
    }
    return 'all found'
}
console.log(betterSol(arr, n))

function optimalSolution(nums, n) {
    // sum of n natural no = n(n+1)/2
    const totalSum = (n * (n + 1))/2;
    let arrSum = 0;
    for(let i = 0 ; i < nums.length; i++){
        arrSum = arrSum + nums[i];
    }
    return totalSum- arrSum;
}

function optimalSolution1(nums) {
    // xor approach , if you do xor of same no it gives 0 , ex. 2 ^ 2 = 0
    let xor = 0;
        let xor1 = 0;
        for(let i = 0; i < nums.length; i++){
            xor = xor ^ nums[i];
            xor1 = xor1 ^ (i+1)
        }
        return xor ^xor1;
}
console.log(optimalSolution1([0, 2, 3, 1, 4]))