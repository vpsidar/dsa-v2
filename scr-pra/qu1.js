function solve(nums) {
    let maxEle = nums[0];
    let occurance = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > maxEle){
            maxEle = nums[i];
            occurance = 1;
        } else if(nums[i] == maxEle){
            occurance += 1;
        }
    }
    return nums.length - occurance;
}

let nums = [2,5,1,4,8,0,1,3,8];
let ex2 = [2,5,0,-1,6,3,7,2,5,7];
console.log(solve(ex2));
