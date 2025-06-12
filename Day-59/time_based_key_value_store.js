let TimeMap = function() {
   this.keystore = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.keystore.has(key)){
       this.keystore.set(key, []);
    }
    this.keystore.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let values = this.keystore.get(key) || [];

    let left = 0;
    let right = values.length-1;
    let result = "";

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(values[mid][0] <= timestamp){
            result = values[mid][1];
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// TC = O(1) for set and O(logn) for get
// SC = O(m*n)