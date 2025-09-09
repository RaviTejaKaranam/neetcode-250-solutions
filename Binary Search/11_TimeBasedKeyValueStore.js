class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore[key]){
            this.keyStore[key] = []
        }
        this.keyStore[key].push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let storedValues = this.keyStore[key] || []
        let left = 0
        let right = storedValues.length - 1
        let result = ""
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(storedValues[mid][1] <= timestamp){
                result = storedValues[mid][0]
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
        return result

    }
}
