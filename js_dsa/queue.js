//enqueue = it is used to add the element from the back of the queue
//dequeue = it is used to remove the element from the front of the queue
//isEmpty = it is used to check wether the queue is empty or not
//peek = it is ued to view front element without removing it
//print queue = it is used to print the queue
class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item) { 
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + " inserted";
    }

    dequeue() { 
        if (this.frontIndex === this.backIndex) {
            return "Queue is empty";
        }
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item + " removed";
    }

    peek() { 
        if (this.frontIndex === this.backIndex) {
            return "Queue is empty";
        }
        return this.items[this.frontIndex];
    }

    isEmpty() { 
        return this.frontIndex === this.backIndex;
    }

    printQueue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let result = '';
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            result += this.items[i] + ' ';
        }
        return result.trim();
    }
}

var queue = new Queue();
console.log(queue.enqueue(90));
console.log(queue.enqueue(80));
console.log(queue.enqueue(345));
console.log(queue.enqueue(95));
console.log(queue.enqueue(23));
console.log(queue.enqueue(65));
console.log(queue.enqueue(54));
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.printQueue());
