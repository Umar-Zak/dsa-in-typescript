





// class HashTable<T>{
//   data
//   private _keys: string[] =[]
//     constructor(size: number){
//         this.data = new Array<[string, T][]>(size)
//     }

//     private hash(key: string): number {
//         let hash = 0
        
//         for(let i = 0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash
//     }

//     set(key: string, value: T){
//         if(!this._keys.includes(key)) this._keys.push(key)

//         const index = this.hash(key)
//         const address = this.data[index]
//         if(!address){
//             this.data[index] = [[key, value]]
//         }
//        else this.data[index].push([key, value])
       
//     }

//     get(key: string):T | undefined {
//         const index = this.hash(key)
//         const address = this.data[index] ?? []
//        return address.find(add => add[0] === key)?.[1]
        
//     }

//     keys(): string[] {
//         return this._keys
//     }

//     remove(key: string): T | undefined {
//         const index = this.hash(key)
//         const address = this.data[index]
//         if(!address) return

//         const result = address.find(data => data[0] === key)
//         this.data[index] = address.filter( add => add[0] !== key)
//         this._keys = this._keys.filter(k => k !== key)
//         return result?.[1]
//     }
// }

// const hashTable = new HashTable<number>(50)
// hashTable.set("Umar", 1000000000)
// hashTable.set("umar", 2000000000)
// hashTable.set("Malik", 1000000000)
// console.log(hashTable.remove("umar"));
// console.log(hashTable.keys());

// function hash(data: string, length: number): number{
//     let result = 0
//     for(let i = 0; i < data.length; i++){
//         result = (result + data.charCodeAt(i) * 1) % length
//     }
//     return result
// }

// function findFirstRecurCharacter(characters: string[]): string | undefined{
//    const data: string[][] = []
   
//    for(let i = 0; i < characters.length; i++){
//     const index = hash(characters[i], characters.length)
//     if(data[index]){
//         if(data[index].includes(characters[i])) return characters[i]

//         data[index].push(characters[i])
//     }
//     else{
//         data[index] = [characters[i]]
//     }
//    }
// }


// function find(data: string[]): string | undefined {
//     const map = new Map<string, string>()
//     for(let i = 0; i < data.length; i++){
//         if(map.get(data[i])) return data[i]
//         map.set(data[i], data[i])
//     }
// }

// function maxSubArray(nums: number[]): number {
//     let large = 0
//     let current = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] + large >= large || current < large + nums[i]) {
//             large += nums[i]
//         }
//         else{
//              current = large
//              large = 0
//         }
//     }

//     return  current > large? current : large
//  };
 

// console.log(maxSubArray([1]));



class LinkNode<T> {
    value: T
    next: LinkNode<T> | null
    constructor(value: T){
        this.value = value
        this.next = null
    }
}


class LinkList<T> {
    head: LinkNode<T>
    length: number
    tail: LinkNode<T>

    constructor(value: T){
        this.head = new LinkNode<T>(value)
        this.tail = this.head
        this.length = 1
    }

    append(value: T){
        const newNode = new LinkNode<T>(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    get(value: T){
        let currentNode: LinkNode<T> | null = this.head
        while(currentNode){
            if(currentNode.value === value) return currentNode
            currentNode = currentNode.next
        }
    }
}

class HashedTable<K, T> {
    private _keys: K[] = []
    data: LinkList<T>[] = []
    length: number
    constructor(length: number){
        this.length = length
    }

    hash(key: K){
        const stringKey = new String(key)
        let hash = 0
        for(let i = 0; i < stringKey.length; i++){
            hash = (hash + stringKey.charCodeAt(i) * i) % this.length
        }
        return hash
    }
    insert(key: K, value: T){
        const index = this.hash(key)
        let linkList = this.data[index]
        if(!linkList){
            linkList = new LinkList<T>(value)
            this.data[index] = linkList
        }
        else {
         linkList.append(value)
        }
        this._keys.push(key)
    }
    // get(key: K){
    //     const index = this.hash(key)
    //     const address = this.data[index]
    //     if(!address) return 
    //     address.get()
    // }

    getKeys(){
        return this._keys
    }
}

const hashedTable = new HashedTable<number, string>(10)
hashedTable.insert(1, "Umar")
hashedTable.insert(2, "ZAk")
hashedTable.insert(60, "Usman")
// console.log(hashedTable.get(1))


