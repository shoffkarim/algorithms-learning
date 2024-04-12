const matrix = [
  [1, 2, 3],
  [0, 2, 6],
  [7, 4, 1],
  [2, 7, 0]
]

const coords = [2, 1]
const findNeighboursInMatrix = () => {
  const neighbours = []

  const row = coords[0]
  const col = coords[1]

  if(matrix[row].length - 1 > col){
    neighbours.push(matrix[row][col + 1])
  }

  if(row > 0) {
    neighbours.push(matrix[row - 1][col])
  }

  if(matrix.length - 1 > row){
    neighbours.push(matrix[row + 1][col])
  }

  if(col > 0) {
    neighbours.push(matrix[row][col - 1])
  }

  return neighbours

}

console.log(findNeighboursInMatrix())

// https://www.notion.so/shoff/52891075f12b47feab05ed1b2feefd04?pvs=4