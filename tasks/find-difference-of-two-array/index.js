const nums1 = [1, 2, 3]
const nums2 = [2, 4, 6]

const findDifference = (nums1, nums2) => {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const answer = [[], []]

  for(let item of set1) {
    if(!set2.has(item)) {
      answer[0].push(item)
    }
  }

  for(let item of set2) {
    if(!set1.has(item)) {
      answer[1].push(item)
    }
  }

  return answer
}

console.log(findDifference(nums1, nums2))