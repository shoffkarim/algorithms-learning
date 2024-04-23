const graph = {
  a: { b: 5, c: 2 },
  b: { a: 5, c: 7, d: 8 },
  c: { a: 2, b: 7, d: 4, e: 8 },
  d: { b: 8, c: 4, e: 6, f: 4 },
  e: { c: 8, d: 6, f: 3 },
  f: { e: 3, d: 4 },
}
const printTable = (table) => {
  return Object.keys(table).map((vertex) => {
    let {vertex: from, cost} = table[vertex]
    return `${vertex}: ${cost} via ${from}`
  })
  .join('\n')
}

const tracePath = (table, start, end) => {
  let path = []
  let next = end
  while (true) {
    path.unshift(next)
    if(next === start) {
      break
    }
    next = table[next].vertex
  }
  return path
}

const formatGraph = (g) => {
  const tmp = {}
  Object.keys(g).forEach((k) => {
    const obj = g[k]
    const arr = []
    Object.keys(obj).forEach((v) => {
      arr.push({vertex: v, cost: obj[v]})
    })
    tmp[k] = arr
  })
  return tmp
}

const dijkstra = (graph, start, end) => {
  let map = formatGraph(graph)
  let visited = []
  let unvisited = [start]
  let shortestDistance = { [start]: {vertex: start, cost: 0}}
  let vertex

  while((vertex = unvisited.shift())) {
    let neighbors = map[vertex].filter((n) => !visited.includes(n.vertex))
    unvisited.push(...neighbors.map((n) => n.vertex))

    let costToVertex = shortestDistance[vertex].cost

    for (let {vertex: to, cost} of neighbors) {
      let currCostToVertex = shortestDistance[to] && shortestDistance[to].cost

      let newCostToNeighbor = costToVertex + cost

      if(currCostToVertex == undefined || newCostToNeighbor < currCostToVertex) {
        shortestDistance[to] = {vertex, cost: newCostToNeighbor}
      }
    }
    visited.push(vertex)
  }

  console.log("Table of costs: ")
  console.log(printTable(shortestDistance))

  const path = tracePath(shortestDistance, start, end)
  console.log("Shortest path is: ", path.join(" -> "), "with weight ", shortestDistance[end].cost)
}

dijkstra(graph, "a", 'f')