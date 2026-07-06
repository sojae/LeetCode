/**
 * @param {character[]} tasks
 * @param {number} n
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
        return this.heap[0];
    }
    push(val){
        this.heap.push(val);
        let i = this.heap.length -1;

        while(i > 0){
            const parent = Math.floor((i-1)/2)
            if(this.heap[parent] >= this.heap[i])break
            [this.heap[parent],this.heap[i]] = [this.heap[i], this.heap[parent]]
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
            [this.heap[largest], this.heap[i]] = [this.heap[i],this.heap[largest]]
            i = largest;
        }
    }
 }
var leastInterval = function(tasks, n) {
    const freq = new Map();
    for(const t of tasks){
        freq.set(t,(freq.get(t)||0)+1);
    }
    const heap = new MaxH();

    for(const val of freq.values())heap.push(val);

    let time = 0;
    let queue = [];

    while(heap.size() > 0 || queue.length > 0){
        time++

        if(heap.size()>0){
            const count = heap.pop()-1
             if(count > 0){
            queue.push([count, time + n])}
        }

        if(queue.length > 0 && queue[0][1]===time){
            heap.push(queue.shift()[0])
        }
    }
    return time
   
};