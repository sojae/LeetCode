/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 시간 복잡도 O(n * k log k)
    // 각 문자열마다 정렬 O(k log k)
    // n개 문자열 순회
    // → O(n × k log k)
    // 공간 복잡도 O(n * k)
    // 모든 문자열을 map에 저장
    // n개 문자열 × 평균 길이 k
    // → O(n × k)

    const map = new Map()

    for(const str of strs){
        const key = str.split('').sort().join('')

        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(str)
    }
    return [...map.values()]








    // const map = {};

    // for(const str of strs){
    //     // 문자열 정렬해서 key 만들기
    //     const key = str.split('').sort().join('');
    //     // key가 없으면 빈 배열로 생성
    //     if(!map[key]){
    //         map[key] = [];
    //     }
    //     // key에 맞는 배열 생성
    //     map[key].push(str)
    // }
    // return Object.values(map);
};