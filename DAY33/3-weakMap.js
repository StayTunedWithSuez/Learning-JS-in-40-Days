//WeakMap

//-----------------------------------------------------------------------
//A philosophy that shows the memory utilization in an array or map is not efficient

let user = {'name': 'Suez'};
//const allUser = [user];

const map = new Map();
map.set(user, true);

user = null;
//console.log(allUser[0]);
console.log(map);

//-----------------------------------------------------------------------
//The major difference between a map and weakMap is the key of a weakMap can only be an object

let addr = {"country": "Bangladesh"};
const wMap = new WeakMap();
wMap.set(addr, true);

addr = null;
console.log(wMap);