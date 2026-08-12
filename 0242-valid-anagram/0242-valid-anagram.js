/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 시간복잡도 O(n)
    // 공간복잡도 O(1)
    // count 객체에 문자 종류만큼 저장 알파벳은 최대 26개로 정해져 있음
    if(s.length !== t.length)return false;

    const count = {}
    for(const char of s){
        count[char] = (count[char]||0)+1
    }

    for(const char of t){
        if(!count[char])return false
        count[char]--
    }
    return true
    // const count = new Map()
    // for(const char of s){
    //     count.set(char, (count.get(char)||0)+1)
    // }

    // for(const char of t){
    //     if(!count.get(char))return false
    //     count.set(char, count.get(char)-1)
    // }
    // return true
};