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
 class MinH {
    constructor(){
        // 배열로 힙 저장
        this.heap = []
    }

    size(){
        // 힙 크기 반환
        return this.heap.length;
    }

    peek(){
        // 루트(최솟값) 반환
        return this.heap[0]
    }

    push(val){
        // 맨 뒤에 추가
        this.heap.push(val)
        // bubbleUp 호출
        this.bubbleUp()
    }

    bubbleUp(){
        // 맨 뒤 인덱스에서 시작
        let i = this.heap.length -1;
        // 루트까지 올라가는 while 루프
        while(i > 0){
            // 부모 인덱스 구하기
            const parent = Math.floor((i-1)/2);
            // 부모가 나보다 작거나 같으면 멈춤
            if(this.heap[parent] <= this.heap[i])break
            // 부모가 나보다 크면 swap
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            // 부모 위치로 이동
            i = parent
        }
    }

    pop(){
        // 루트 저장
        let top = this.heap[0]
        // 마지막 값 꺼냄
        let last = this.heap.pop()
        // 힙이 비어있지 않으면
        if(this.heap.length > 0){
            // 마지막 값을 루트로 올림
            this.heap[0] = last
            // bubbleDown 호출
            this.bubbleDown()
        }
        // 루트 반환
        return top
    }

    bubbleDown(){
        // 루트(0)에서 시작
        let i = 0;
        // 힙 크기 저장
        let n = this.heap.length;
        // 무한 while 루프
        while(true){

            // 현재 위치를 smallest로 가정
            let smallest = i;
            // 왼쪽 자식 인덱스
            const left = 2 * i + 1;
            // 오른쪽 자식 인덱스
            const right = 2 * i + 2;
            // 왼쪽 자식이 범위 안이고 나보다 작으면 smallest 갱신
            if(left < n && this.heap[left]<this.heap[smallest]) smallest = left;
            // 오른쪽 자식이 범위 안이고 나보다 작으면 smallest 갱신
            if(right < n && this.heap[right]<this.heap[smallest]) smallest = right;
            // smallest가 나면 멈춤
            if(smallest === i)break
            // smallest랑 swap
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            // smallest 위치로 이동
            i = smallest
        }
    }
}
class MedianFinder {
    constructor(){
        this.small = new MaxH()  // 왼쪽 절반 (작은 값들)
        this.large = new MinH()  // 오른쪽 절반 (큰 값들)
    }

    addNum(num){
        // ① 일단 왼쪽에 넣기
        this.small.push(num)

        // ② 왼쪽 최댓값이 오른쪽 최솟값보다 크면 → 오른쪽으로 이동
        if(this.large.size() > 0 && this.small.peek() > this.large.peek()){
            this.large.push(this.small.pop())
        }

        // ③ 크기 균형 맞추기
        if(this.small.size() > this.large.size() + 1){
            this.large.push(this.small.pop())  // 왼쪽이 너무 크면 오른쪽으로
        }
        if(this.large.size() > this.small.size() + 1){
            this.small.push(this.large.pop())  // 오른쪽이 너무 크면 왼쪽으로
        }
    }

    findMedian(){
        if(this.small.size() > this.large.size()){
            return this.small.peek()  // 왼쪽이 더 크면 왼쪽 top
        }
        if(this.large.size() > this.small.size()){
            return this.large.peek()  // 오른쪽이 더 크면 오른쪽 top
        }
        return (this.small.peek() + this.large.peek()) / 2  // 같으면 평균
    }
}