/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 1.정렬한다
    // 2.포인터를 하나 고정시킨다
    // 3.투포인터로 0보다 작으면 left를 오른쪽으로 크면 right을 왼쪽으로한다
    // 4.0이면 결과로 push
    nums.sort((a,b)=>a-b);
    const result = [];

    for(let i = 0; i <nums.length -2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue

        let left = i+1;
        let right = nums.length -1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]

            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]])

                while(left < right && nums[left]===nums[left+1])left++;
                while(left < right && nums[right]===nums[right-1])right--;
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
};