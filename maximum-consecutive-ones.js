function maxConOnes(nums) {
    let max = 0;
    let counter = 0;
    for( let i = 0; i < nums.length; i++){
        if(nums[i] == 1) {
            counter++;
            max = Math.max(counter, max);
        } else {
            counter = 0;
        }
    }

    return max;
}
let nums = [1, 1, 0, 0, 1, 1, 1, 0];
console.log(maxConOnes(nums))