
class Nodes<N> {
 value: N
 next: Nodes<N> | null
 previous: Nodes<N> | null
 constructor(value: N){
  this.value = value
  this.next = null
  this.previous = null
 }
}

class SinglyNode <T>{
  value: T
  next: SinglyNode<T> | null
  constructor(value: T){
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList <T> {
  head: SinglyNode<T>
  length: number
  tail: SinglyNode<T>

  constructor(value: T) {
    this.head = new SinglyNode<T>(value)
    this.length = 1
    this.tail = this.head
  }

  append(value: T){
    const newNode = new SinglyNode<T>(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  printList(){
    let currentNode: SinglyNode<T> | null  = this.head
    while(currentNode){
      console.log(currentNode.value);
      currentNode = currentNode.next
      
    }
  }

  reverse(){
    if(this.length === 1) return 

    let currentNode: SinglyNode<T> | null = this.head
    let heaNode = new SinglyNode<T>(this.head.value)
    let tail = new SinglyNode<T>(this.head.value)
    
    while (currentNode.next){
       currentNode = currentNode.next as SinglyNode<T>
       const newNode = new SinglyNode<T>(currentNode.value)
       newNode.next = heaNode
       heaNode = newNode
    }
   this.head = heaNode
   this.tail = tail
   
  }
}


class LinkedList <T> {
  head: Nodes<T> 
  tail: Nodes<T>
  length: number

  constructor(value: T){
    this.head = new Nodes<T>(value)
    this.tail = this.head
    this.length  = 1
  }

  append(value: T){
    const newNode = new Nodes<T>(value)
    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(value: T){
    const newNode = new Nodes<T>(value)
    this.head.previous = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  traverseToIndex(index: number) {
    let currentNode: any = this.head
    for(let i = 0; i < index - 1; i ++){
      currentNode = currentNode?.next
    }
    return currentNode
  }

  insert(value: T, index: number){
    // check to see if index is equal or greater than length of linked list, then return
    if(index >= this.length) return this.append(value)
    // check to see if index is zero, then perform a prepend
    if(index === 0) return this.prepend(value)
    // Find the node before the node at the given index
   const leadingNode = this.traverseToIndex(index)
   const holderNode = leadingNode?.next
    const newNode = new Nodes<T>(value)
    newNode.previous = leadingNode
    holderNode.previous = newNode 
    newNode.next = holderNode
    leadingNode.next = newNode
   this.length++
  }

  remove(index: number){
    if(index > (this.length - 1) || index < 0) return 

    if(index === 0){
      this.head = this.head.next as Nodes<T>
      this.head.previous = null
    }

  else{
    const leader = this.traverseToIndex(index) as Nodes<T> 
    if(leader.next){
      const targetNode = leader.next as Nodes<T>
      leader.next = targetNode.next as Nodes<T>
      leader.next.previous = leader
  }
  }
    this.length--
  }
}



const list = new SinglyLinkedList<number>(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.reverse()
list.printList()
console.log(list.length);


const maxedSubArray = (input: number[]): number => {

  let result = 0
  let previousResult = 0
  for(let i = 0; i < input.length; i++){
    if(result + input[i] >= result){
      result += input[i]
    }
    else{
      previousResult = result > previousResult? result: previousResult
      result = 0
    }
  }
  return result > previousResult? result : previousResult
}

// console.log(maxedSubArray([-20, 0, 6, 9,-30, 3]));
