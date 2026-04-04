/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length -1;

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);
        if(letters[mid] <= target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    if(left < letters.length){
        return letters[left];
    } else{
        return letters[0];
    }
    // left < letters.length ? letters[left] : letters[0];
};