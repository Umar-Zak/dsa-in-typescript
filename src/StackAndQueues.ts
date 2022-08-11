class StackNode<T> {
    value: T 
    next: StackNode<T> | null

    constructor(value: T){
        this.value = value
        this.next = null
    }
}

class Stack<T> {
    top: StackNode<T> | null
    bottom: StackNode<T> | null
    length: number 
    
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    isEmpty(){
        return this.length === 0 ? true : false
    }

    peek(){
        if(this.isEmpty()) return 

        return this.top?.value
    }

    push(value: T){
        const newNode = new StackNode<T>(value)
        newNode.next = this.top
        this.top = newNode
        if(this.isEmpty()) this.bottom = newNode
        this.length++
    }

    pop(){
     if(this.isEmpty()) return
     const top = this.top
     this.top = this.top?.next as StackNode<T>
     this.length--
     if(this.isEmpty()) this.bottom = null
     return top?.value
    }

    

}


class Queue<T> {
   private  _first: StackNode<T> | null
   private _last: StackNode<T> | null
    length: number
    constructor(){
        this._first = null
        this._last = null
        this.length = 0
    }

    enqueue(value: T){
        const newNode = new StackNode<T>(value)
        if(!this._last){
            this._first = newNode
            this._last = this._first
        }
           else{
            this._last.next = newNode
            this._last = newNode
           }
      
        this.length++
    }

    peek(){
        return this._first?.value
    }
    dequeue(){
      if(!this._first) return 

      const result = this._first.value
      this._first = this._first.next
      this.length--
      return result
    }

    isEmpty(){
        return this.length === 0
    }
}

class StackedQueue<T>{
    first: T[] = []
    last: T[] = []
    length: number = 0

    enqueue(value: T){
        
        for(let i = 0; i < this.first.length; i++){
            this.last.push(this.first.pop() as T)
        }
        this.last.push(value)
        this.length++
    }

    peek(){
        for(let i = 0; i < this.length; i++){
            this.first.push(this.last.pop() as T)
        }

        return this.first[this.length - 1]
    }

}



const stack = new Stack<string>()

// Use the input below to test the bracket function. You can also test with your own input

const input = "{[{}[] 049 < <039 >>]}"

// The function below checks to see if a particular is properly formatted with
// braces eg({}, [], (), <> ) and other braces
const brackets = (input: string) => {
    const openingParenthesis = ["(", "{", "[","<"]
    const closingParenthesis = [")", "}", "]", ">"]

    const isValid = (top: string, closing: string) => {
        if((top === "(" && closing  === ")") || 
        (top === "{" && closing  === "}") || 
        (top === "[" && closing  === "]") ||
        (top === "<" && closing  === ">")
        ) return true

        else return false
    }

    for(let i = 0; i < input.length; i++){
        if(openingParenthesis.includes(input.charAt(i))){
         stack.push(input.charAt(i))
        }
        if(closingParenthesis.includes(input.charAt(i))){
            if(!isValid(stack.peek() as string, input.charAt(i))) return false
            else stack.pop()
        
        }
    }
    return stack.isEmpty() ? true : false
}




const queue = new Queue<number>()
const stackQueue = new StackedQueue<number>()
stackQueue.enqueue(30)
stackQueue.enqueue(600)
stackQueue.enqueue(10)
// console.log(stackQueue.peek());




