let lastStoneWeight = function(stones) {
    let maxPQ = new MaxPriorityQueue();

    for(let stone of stones){
        maxPQ.enqueue(stone);
    }

    while(maxPQ.size() > 1){
        let stone1 = maxPQ.dequeue();
        let stone2 = maxPQ.dequeue();
    
    if(stone1 !== stone2){
        maxPQ.enqueue(stone1 - stone2);
    }
    }
    return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
};