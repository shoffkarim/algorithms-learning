// const asteroids = [5, 10, -5]
// const asteroids = [10,2,-5]
const asteroids = [-2,-2,1,-2]

const asteroidsCollision = (asteroids) => {
  if(asteroids.length === 0) {
    return []
  }
  const stack = []

  for(let i = 0; i < asteroids.length; i++) {
    while(stack.length > 0 && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      let diff = asteroids[i] + stack[stack.length - 1]
      if(diff < 0) {
        stack.pop()
      } else if (diff > 0) {
        asteroids[i] = 0
      } else {
        asteroids[i] = 0
        stack.pop()
      }
    }

    if(asteroids[i]) {
      stack.push(asteroids[i])
    }

  }

  return stack
}

console.log(asteroidsCollision(asteroids))