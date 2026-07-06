/**
 * @param {number[]} stones
 * @return {number}
 */
class MaxH{
    constructor(){
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0]
    }
    push(val){
        this.heap.push(val);
        let i = this.heap.length -1;
        while(i > 0){
            const parent = Math.floor((i-1)/2);
            if(this.heap[parent] >= this.heap[i])break
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent;
        }
    }
    pop(){
        const top = this.heap[0]
        const last = this.heap.pop()
        if(this.heap.length > 0){
            this.heap[0] = last
            this.bubbleDown()
        }
        return top;
    }
    bubbleDown(){
        let i = 0;
        let n = this.heap.length;
        while(true){
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            if(left < n && this.heap[left] > this.heap[largest])largest = left
            if(right < n && this.heap[right] > this.heap[largest])largest = right
            if(largest === i)break

            [this.heap[largest],this.heap[i]] = [this.heap[i], this.heap[largest]]
            i = largest
        }
    }
}
var lastStoneWeight = function(stones) {
    // 두가지가 모두 같다면 파괴
    // 뺀 값 넣기 
    heap = new MaxH()

    for(const stone of stones)heap.push(stone)

        while(heap.size() > 1){
            const first = heap.pop()
            const second = heap.pop()
            if(first !== second){
                heap.push(first - second)
            }
        }
    return heap.size()===0 ? 0 : heap.peek()
        
    
    
};