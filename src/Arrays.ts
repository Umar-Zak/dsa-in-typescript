
type ID = {_id: string}
class MyArray<T extends ID> {
    length = 0
    data: {[index: number]: T} = {}

    add(item: T){
        this.data[this.length] = item
        this.length++
    }

    get(index: number): T {
        return this.data[index]
    }

    traverse(){
        for(let i = 0; i < this.length; i++){
            console.log(this.data[i]);
            
        }
    }

    // The time complexity of the below method is O(1)
    pop(): T {
        const lasItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lasItem
    }

    shiftItems(index: number){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

// The time complexity of this method is O(N)

    delete(index: number): T | undefined {
        if(index < 0 || index > this.length) return 
        const deletedItem = this.data[index]
        this.shiftItems(index)
        return deletedItem
    }

    insert(index:number, item: T) {
        let temporal = this.data[index]
        this.data[index] = item

        for(let i = (index + 1); i < this.length; i++){
            const currentItem = this.data[i]
            this.data[i] = temporal
            temporal = currentItem
        }
       
       this.data[this.length + 1] = temporal
       this.length++
        
    }

    // The complexity of this function is 0(N)
    map<Y>(param: (item: T) => Y): Y[] {
        let mappedData: Y[] = []
        for(let i = 0; i < this.length; i++){
          mappedData[i] =  param(this.data[i])
        }
        return mappedData
    }
}



class Person {
    _id: string = new Date().toString()
    constructor(public name: string){

    }
}

const array = new MyArray<Person>()

array.add(new Person("Umar Zak"))
array.add(new Person("Judith"))
array.add(new Person("Mark"))
array.add(new Person("John"))
array.insert(0, new Person("I just entered"))
// array.delete(0)

// const result = array.map<{name: string, _id: string}>(item => ({name:item.name, _id: item._id}))
console.log(array.data);
// console.log(result);

// A function to reverse a string 

function reverseString(input: string): string {
    let reversedString = ""
    for(let i = (input.length - 1); i >= 0; i--){
        reversedString += input[i]
        
    }
    return reversedString
}


function reverseString2(input: string): string{
    return input.split("").reverse().join("")
}

const reverseString3 = (input: string): string => [...input].reverse().join("")


function mergeSortArrays(firstInput: number[], secondInput: number[]): number[]{
    let mergedInput: number[] = []
    const length = firstInput.length > secondInput.length ? firstInput.length : secondInput.length

    for(let i = 0; i < length; i++){
        if(firstInput[i] && secondInput[i] && firstInput[i] > secondInput[i]){
           mergedInput = [...mergedInput, secondInput[i], firstInput[i]]
        }
        else{
         if(firstInput[i]) mergedInput.push(firstInput[i])
         if(secondInput[i]) mergedInput.push(secondInput[i])
        }
    }
    return mergedInput
}

// const mergeSortArrays2 = (input1: number[], input2: number[]): number[] => {
//     const mergedArrays: number[] = []
//     if(input1.length === 0) return input2
//     if(input2.length === 0) return input1

//     let i = 0
//     let j = 0
 
//     while(i < 7){

//         if(input1[i] < input2[j]){
//             mergedArrays.push(input1[i])
//             i++
//             console.log("I++", mergedArrays);
            
//         }

//         else {
//             mergedArrays.push(input2[j])
//             j++
//         }
       
//     }
//     return mergedArrays
// }

const mergeSort2 = (firstInput: number[], secondInput: number[]): number[] => [...firstInput, ...secondInput].sort()


// The time complexity of this function is 0(N)
const addTwoSortedArrays = (firsInput: number[], secondInput: number[]): number[] => {
    const sums: number[] = []
    if(firsInput.length === 0) return secondInput
    if(secondInput.length === 0) return firsInput
    
    const length = firsInput.length > secondInput.length ? firsInput.length : secondInput.length

    for(let i = 0; i < length; i++){
        sums.push((firsInput[i] ?? 0) + (secondInput[i] ?? 0))
    }

    return sums
}

const twoSum = (integers: number[], target: number): number | number[] => {
    if(integers.length === 0) return 0
    
    for(let i = 0; i < integers.length; i++){
        for(let j = i+ 1; j < integers.length; j++){
            if( integers[i] + integers[j] === target) return [i, j]
        }
    }
    return 0
}

const A =[1, 2, 3, 4]
const K = 4
//  answer = [1, 2, 3, 4]
const cyclicRotation = (input: any[], rotationCount: number) => {
    let items = input
    const lastIndex = items.length - 1
    for(let i = 0; i < rotationCount; i++){
        let lastItem = items[lastIndex]
       items = [lastItem, ...items.filter((_, index) => index !== lastIndex)]
    }

    return items
}



const oddOccurrenceInArray = (input: any[]) => {
    if(input.length % 2 === 0) throw Error("This input is invalid")
    for(let i = 0; i < input.length; i++){
        const occurence = input.filter(inp => inp === input[i])
        if(occurence.length % 2 !== 0) return input[i]
    }
}

const binaryGap = (input: number) => {
   const binaryNumber = (input >>> 0).toString(2)
   const onesIndexes: number[]= []
   let maxGap: number = 0
  for(let i = 0; i < binaryNumber.length; i++){
    if(binaryNumber.charAt(i) === "1") onesIndexes.push(i)
  }

  for(let i = 0; i < (onesIndexes.length - 1); i++){
    const subStringLength = binaryNumber.substring(onesIndexes[i] + 1,( onesIndexes[i + 1])).length
    maxGap = subStringLength > maxGap ? subStringLength : maxGap
    
  }

return maxGap
}


console.log(binaryGap(1041));
