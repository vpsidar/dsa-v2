function movesZeroToEnd(nums){
    for(let i =nums.length-1; i>=0; i--){
        if(nums[i] == 0) {
            let j = i;
            while(j< nums.length-1){
                nums[j] = nums[j+1];
                j++;
            }
            nums[nums.length-1] = 0;
        }
    }
    return nums;   
}
let nums = [0, 1, 4, 0, 5, 2]
//console.log(movesZeroToEnd(nums))  // TC : O(n^2)

//another brute force approach 
//create a temp array
// iterate over the array and starting putting the non zero number to the temp array
// loop over temp array and put then no of temp to actual array
// loop form temp.size to array.length and fill all the palce with zero 
// TC: first loop - O(n) , second loop - O(n) , third - O (n-n) = O(2n)
//SC: O(n)

//Optimal approach using 2 pointer
let arr = [2,1,3,0,1,4]
function moveZeroToEnd1(nums) 
{
    let i = 1;
    let j = 0;

    while(i < nums.length){
        if(nums[i] != 0 && nums[j] == 0){
            let temp = nums[j];
            nums[j] = nums[i]
            nums[i] = temp;
            
        }
        if(nums[j] != 0) {
            j++;
        }
        i++;
    }
    return nums;
}
console.log(moveZeroToEnd1(nums))