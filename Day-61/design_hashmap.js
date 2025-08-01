
var MyHashMap = function() {
    this.map = new Map();
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map.set(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
     if(this.map.has(key)){
        return this.map.get(key);
     }else{
        return -1;
     }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(this.map.has(key)){
        this.map.delete(key);
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// TC = O(1) for each function call
// SC = O(1000000) since the key is in the range [0,1000000].