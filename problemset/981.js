/**
 * Initialize your data structure here.
 */
 var TimeMap = function () {
	this.store = new Map();
 };
 
 /**
  * @param {string} key
  * @param {string} value
  * @param {number} timestamp
  * @return {void}
  */
 TimeMap.prototype.set = function (key, value, timestamp) {
	if (this.store.has(key)) {
		this.store.get(key).push({ value, timestamp });
	} else {
		this.store.set(key, [{ value, timestamp }]);
	}
 };
 
 /**
  * @param {string} key
  * @param {number} timestamp
  * @return {string}
  */
 TimeMap.prototype.get = function (key, timestamp) {
	 if (this.store.has(key)) {
	  const values = this.store.get(key);
	  let lo = 0, hi = values.length - 1;
	  while (lo < hi) {
		 const mid = Math.floor((lo + hi) / 2);
		 console.log(mid)
		 const { value: currentValue, timestamp: currentTimestamp } = values[mid];
		 if (currentTimestamp === timestamp) {
			return currentValue;
		 } else if (currentTimestamp < timestamp) {
			lo = mid;
		 } else {
			hi = mid - 1;
		 }
	  }
	 }
	 return "";
 };
 
 /**
  * Your TimeMap object will be instantiated and called as such:
  * var obj = new TimeMap()
  * obj.set(key,value,timestamp)
  * var param_2 = obj.get(key,timestamp)
  */