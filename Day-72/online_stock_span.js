function StockSpanner() {
    this.stack = [];   // stack of indices
    this.prices = [];  // store all prices
}

StockSpanner.prototype.next = function(price) {
    let i = this.prices.length; // index of current price
    this.prices.push(price);    // store price

    // pop all smaller or equal prices
    while (this.stack.length > 0 && this.prices[this.stack[this.stack.length - 1]] <= price) {
        this.stack.pop();
    }

    // calculate span
    let span;
    if (this.stack.length == 0) {
        span = i + 1;
    } else {
        span = i - this.stack[this.stack.length - 1];
    }

    this.stack.push(i); // push current index
    return span;
};

// Time and Space
// TC = O(n)
// SC = O(n)