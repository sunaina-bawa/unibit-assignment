 function findCombinations(nums, target) {
  const result = [];
  

  nums.sort((a, b) => a - b);
  
  let left = 0;
  let right = nums.length - 1;

 
  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      result.push([nums[left], nums[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  

  const mergedArray = result.flat().sort((a, b) => a - b);


  const doubleTarget = target * 2;
  const secondCombinations = result.map(pair => [...pair, ...pair]);

  return [result, mergedArray, secondCombinations];
}


const nums = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;


const [firstCombinations, mergedArray, secondCombinations] = findCombinations(nums, target);

console.log(`First Combination For ${target}:`, firstCombinations);
console.log("Merge Into a single Array:", mergedArray);
console.log(`Second Combination For ${target * 2}:`, secondCombinations);
