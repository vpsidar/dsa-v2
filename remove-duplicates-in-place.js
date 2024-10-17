/* 
Remove duplicates from sorted array

Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once. Return the number of unique elements in the array.
If the number of unique elements be k, then,
Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
The remaining elements, as well as the size of the array does not matter in terms of correctness.
An array sorted in non-decreasing order is an array where every element to the right of an element in either equal to or greater in value than that element.
*/
let ar = [0, 0, 3, 3, 5, 6];
function removeDuplicatesFromSortedArray(nums){
    //brute force approach
    const set = new Set();
    for(let i = 0; i< nums.length; i++) {
        set.add(nums[i]);
    }
    let i = 0;
    for( const item of set){
        nums[i] = item;
        i++;
    }
    return i;
}

function removeDuplicatesFromSortedArray1(nums){
    let i = 0;
    let j = 1;
    for(j; j<nums.length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(i)
    return nums;
}
console.log(removeDuplicatesFromSortedArray1(ar))