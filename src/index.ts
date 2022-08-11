
// Printing all pair of sums

const boxes = [1, 2, 3, 4, 5]

for(let i = 0; i < boxes.length; i++){
    for(let j = 0; j < boxes.length; j++){
        console.log([boxes[i], boxes[j]]);
        
    }
}

type MP = {
    [property: string]: string
}

let map: MP = {}
let names = ["a", "b"]
map["a"] = names[0]
map["b"] = names[1]