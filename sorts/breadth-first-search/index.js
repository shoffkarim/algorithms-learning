//     10
//     /  \
//    4    17
//   / \   / \
//  1   9 12  18

let initTree = {
  "10": {
    value: "10",
    left: "4",
    right: "17"
  },
  "4": {
    value: "4",
    left: "1",
    right: "9"
  },
  "17": {
    value: "17",
    left: "12",
    right: "18"
  },
  "1": {
    value: "1",
    left: null,
    right: null
  },
  "9": {
    value: "9",
    left: null,
    right: null
  },
  "12": {
    value: "12",
    left: null,
    right: null
  },
  "18": {
    value: "18",
    left: null,
    right: null
  },
}


const breadthFirstSearch = (tree, root, searchValue) => {
  let queue = []
  let path = []
  queue.push(root)

  while(queue.length > 0) {
    let current = queue[0]
    path.push(current.value)
    if(current.value == searchValue) {
      return "Found it " + current.value + "; " + path
    }
    if(current.left != null){
      queue.push(tree[current.left])
    }
    if(current.right != null){
      queue.push(tree[current.right])
    }
    queue.shift()
  }
  return "Sorry, nothing here"
}

console.log(breadthFirstSearch(initTree, initTree[10], "12"))