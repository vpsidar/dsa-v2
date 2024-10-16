function rotateArray(nums, k) {
    let d = k%nums.length;
    if(k == nums.length) return nums;
    let moveArr = [];
    let newArr = [];
    for(let i = 0; i < nums.length; i++){
        if(i < d){
            moveArr.push(nums[i]);
        }else {
            newArr.push(nums[i]);
        }
    }

    for(let j = 0; j < moveArr.length; j++ ){
        newArr.push(moveArr[j])
    }

    return newArr;

}
function rotateArray1(nums, k) {
    let d = k%nums.length;
    if(k == nums.length) return nums;
    let moveArr = [];
    for(let i = 0; i < d; i++){
        moveArr.push(nums[i]);
    }

    for(let j = d; j < nums.length; j++ ){
        nums[j-d] = nums[j];
    }
    //put move array to last
    for(let n = nums.length-d; n< nums.length; n++){
        nums[n]= moveArr[n-(nums.length-d)];
    }
    return nums;

}
function rotateArray2(nums, d) {
    reverseArray(nums,0, d-1);
    reverseArray(nums,d, nums.length-1);
    reverseArray(nums, 0, nums.length-1);
    console.log(nums);
}
function reverseArray(nums, start, end) {
    while(start < end) {
        let temp = nums[start];
        nums[start]  = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
let arr = [1, 2, 3, 4, 5, 6];
//console.log(rotateArray(arr, 7));
//reverseArray(arr, 0, arr.length-1);
//console.log(arr);
rotateArray2(arr,2);