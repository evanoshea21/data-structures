

// var thisHash = new HashTable();
// thisHash = {
//   limit: 8,
//   storage: {}, // [0,1,2,3,4]
//   insert: func,
//   retrieve: func,
//   remove: func
// }
// [0,'Feisty',2,3,4] //<- Actual HashTable
// ['Happy'] //<- Limited Storage
// //[['Cat', 'Feisty'],[k, v]]
// //['Dog', 'Happy]
// 'Feisty' -> [['Cat','Feisty'],['Dog', 'Happy']]

// thisHash [0,   'Feisty'   ,2,3,4]
// thisHash.insert('Dog', 'Happy')
//   transmogrifier = 1
// thisHash('Cat', 'Fiesty')

var HashTable = function() {
//this = Object.create(HashTable);
  this._limit = 8;
  this.hashArray = LimitedArray(this._limit); // -> [1,2,3,4,5] //CANT change size
//return this
};


HashTable.prototype.insert = function(k, v) {
  var hashIndex = getIndexBelowMaxForKey(k, this._limit);
  //var hashIndex = indexHelper(k)

  //if this.hashArray[hashIndex] === undefined
    //this.hashArray[hashIndex] = v;
    //this.hashArray.setKeyToIndex(hashIndex, k) //now we know ogKey
  if(this.hashArray[hashIndex] === undefined) {
    this.hashArray[hashIndex] = v;
    this.hashArray.set(hashIndex, k);
  } else if (this.hashArray.get(hashIndex) === k) { //override if key exists
    this.hashArray[hashIndex] = v;
  } else if (!Array.isArray(this.hashArray[hashIndex])){
    var ogKey = this.hashArray.get(hashIndex);
    var ogVal = this.hashArray[hashIndex];
    this.hashArray[hashIndex] = [[ogKey, ogVal], [k, v]];
      //set this.hashArray[hashIndex] = [[k, v], [ogKey, ogVal]]
  } else { //IS Array
    this.hashArray[hashIndex].push([k, v])
  }

  //else if -- it already has something

    //if -- value is not array
      //var ogKey = this.hashArray.storage[hashIndex];
      //var ogVal = this.hashArray[hashIndex];
      //set this.hashArray[hashIndex] = [[k, v], [ogKey, ogVal]]
    //else -- value IS an array
      //push this.hashArray[hashIndex].push([key, value]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this.hashArray[index])) {
    for(var i = 0; i < this.hashArray[index].length; i++) {
      if(this.hashArray[index][i][0] === k) {
        return this.hashArray[index][i][1];
      }
    }
  } else {
    return this.hashArray[index];
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this.hashArray[index] = undefined;




};



/*
 * Complexity: What is the time complexity of the above functions?
 */


