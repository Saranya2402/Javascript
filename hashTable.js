class HashTable {
    constructor(size){
        this.data = new Array(size)
    }
    // underscore(_) indicates that this is a private property of the class
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }
    get(key){
        let address  = this._hash(key);
        let currentBucket = this.data[address]
        for(let i = 0; i< currentBucket.length; i++){
            if(currentBucket[i][0] === key){
                console.log(currentBucket[i][1])
                return currentBucket[i][1]
            }
        }
    }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 54)
myHashTable.get('oranges')
