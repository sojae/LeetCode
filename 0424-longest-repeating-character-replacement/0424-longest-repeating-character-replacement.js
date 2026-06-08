/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    const count = new Map();  // 윈도우 안 문자 개수
    let maxFreq = 0;          // 가장 많은 문자의 개수
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // 1. 현재 문자 개수 +1
        count.set(s[right], (count.get(s[right]) || 0) + 1);

        // 2. 가장 많은 문자 개수 갱신
        maxFreq = Math.max(maxFreq, count.get(s[right]));

        // 3. 바꿔야 할 수가 k보다 많으면 윈도우 줄이기
        while ((right - left + 1) - maxFreq > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        // 4. 윈도우 길이 갱신
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};