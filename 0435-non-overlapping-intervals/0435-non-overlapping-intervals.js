/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
    intervals.sort((a,b)=>a[1] - b[1])

    let count = 0;
    let prevEnd = intervals[0][1]

    for(let i = 1; i < intervals.length; i++){
        const [start, end] = intervals[i]
        if(start >= prevEnd){
            prevEnd = end
        }else{
            count++
        }
    }
    return count

};