const grid = [
  [3,1,2,2],
  [1,4,4,5],
  [2,4,2,2],
  [2,4,2,2]
]

// const grid = [
//   [13,13],
//   [13,13]
// ]

// const grid = [
//   [11,1],
//   [1,11]
// ]

const equalPairs = (grid) => {
  const rowHash = new Map()
  const columnHash = new Map()

  let count = 0

  for(let i = 0; i < grid.length; i++) {
    const str = grid[i].join(',')
    if(rowHash.has(str)) {
      rowHash.set(str, rowHash.get(str) + 1)
    } else {
      rowHash.set(str, 1)
    }
  }

  for(let i = 0; i < grid.length; i++) {
    const arr = []
    for(let j = 0; j < grid[0].length; j++) {
      arr.push(grid[j][i])
    }
    let str = arr.join(',')
    if(columnHash.has(str)) {
      columnHash.set(str, columnHash.get(str) + 1)
    } else {
      columnHash.set(str, 1)
    }
  }


  for(let [key, value] of rowHash) {
    if(columnHash.has(key)) {
      let columnValue = columnHash.get(key)
      count += value * columnValue
    }
  }

  return count
}


const equalPairs2 = (grid) => {
  let count = 0

  const rows = new Map()

  for(let r = 0; r < grid.length; r++) {
    const row = JSON.stringify(grid[r])
    rows.set(row, 1 + (rows.get(row) || 0))
  }

  for(let c = 0; c < grid.length; c++) {
    const col = JSON.stringify(grid.map(row => row[c]))

    count += (rows.get(col) || 0)
  }

  return count
}

console.log(equalPairs2(grid))