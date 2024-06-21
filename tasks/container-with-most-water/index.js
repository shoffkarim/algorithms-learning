const height = [2,3,4,5,18,17,6]

const maxArea = (height) => {
  let value = 0

  let left = 0
  let right = height.length - 1

  while(left < right) {
    let newValue = Math.min(height[left], height[right]) * (right - left)

    value = Math.max(value, newValue)

    if(height[left] > height[right]) {
      right--
    } else {
      left++
    }

  }

  return value
}

console.log(maxArea(height))