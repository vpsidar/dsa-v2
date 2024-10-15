let arr = [7, 4, 1, 5, 3]; 
function bubbleSort(nums) {
   for(let i = nums.length; i>=0; i--){
    for(j = 0; j < i; j++){
        if(nums[j] > nums[j+1]){
            //swap
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
   }
   return nums; 
}
bubbleSort(arr);
console.log(arr);
