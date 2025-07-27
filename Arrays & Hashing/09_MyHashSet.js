class MyHashSet {
    constructor() {
        //Initalaize a new object/ hash map
        this.newHashSet = {}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        //Add 1 if the key already exists or set it to 1 if it does not exist in the object
        this.newHashSet[key] = (this.newHashSet[key] || 0) + 1
        return null
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        // delete the key
        delete this.newHashSet[key]
        return null
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        //Check if the key exists and return the appropriate value
        if(this.newHashSet[key]){
            return true
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
