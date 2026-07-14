/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
모든 수업을 들을 수 있는지 없는지 판단하는 문제

numCourses = 총 수업 개수
prerequisites = 선수과목 관계

사이클 없으면 → 모든 수업 들을 수 있음 → true
사이클 있으면 → 영원히 못 드는 수업 생김 → false
 */
var canFinish = function(numCourses, prerequisites) {
    //인접 리스트 만들기
    const adj = Array.from({length:numCourses},()=>[])
    for(const [a,b]of prerequisites){
        adj[b].push(a)
    }
    // 0 = 미방문, 1 = 탐색중, 2 = 탐색완료
    const state = new Array(numCourses).fill(0)

    const dfs = (node)=>{
        if(state[node] === 1)return false
        if(state[node] === 2)return true

        state[node] = 1

        for(const next of adj[node]){
            if(!dfs(next))return false
        }
        state[node] = 2
        return true
    }
    for(let i = 0; i < numCourses; i++){
        if(!dfs(i))return false
    }
    return true
};