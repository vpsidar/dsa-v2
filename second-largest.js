function secondLargestElement1(nums) {
    nums.sort(function(a, b){return a-b});
    for(let i = nums.length-2; i >=0; i--){
        if(nums[i] < nums[nums.length-1]){
            return nums[i];
        }
    }
    return -1;
}
let nums = [7, 7, 2, 2, 10, 10, 10];
//console.log(secondLargestElement3(nums));  //nlogn + n 

function secondLargestElement2(nums) {
    //first find the larget 
    let largest = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        largest = Math.max(largest, nums[i]);
    }
    let secondLargest = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < largest) {
            secondLargest = Math.max(secondLargest, nums[i]);
        }
    }
    if(secondLargest === Number.MIN_SAFE_INTEGER) return -1;
    return secondLargest;
}

//assuming arrau does not contain negative value
function secondLargestElement3(nums) {
    let largest = nums[0];
    let secondLargest = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if( nums[i] != largest) {
            secondLargest = Math.max(secondLargest, nums[i]);
        }
    }
    return secondLargest;
}
let nums1 = [9,3,3,3,2,2,2]
console.log(secondLargestElement1(nums));  // nlogn + n
console.log(secondLargestElement2(nums1)); // n + n => 2n
console.log(secondLargestElement3(nums1)); // n

