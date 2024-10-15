let arr = [7, 4, 1, 5, 3];  // 0,2,3,4,5,9
function selectionSort(arr){
    let minItem = Number.MAX_VALUE;
    let minItemPos = -1;
    for(let i = 0; i < arr.length; i++){
        minItem = Number.MAX_VALUE;
        for( let j = i; j< arr.length; j++){
            console.log('j ', j);
            if(arr[j]< minItem){
                minItem = arr[j];
                minItemPos = j;
            }
        }
        //console.log(minItem);
        let temp = arr[i];
        arr[i] = minItem;
        arr[minItemPos] = temp;
        //console.log(arr);
        //console.log(arr[i]);
    }
}
selectionSort1(arr);
console.log(arr);

function selectionSort1(nums) {
    let minItem = Number.MAX_VALUE;
    let minItemPos = -1;
    for(let i = 0; i < nums.length; i++){
        minItem = Number.MAX_VALUE;
        for(let j = i; j < nums.length; j++){
            if(nums[j] < minItem){
                minItemPos = j;
                minItem = nums[j]
            }
        }
        let temp = nums[i];
        nums[i] = minItem;
        nums[minItemPos] = temp;
    }
    return nums;
}