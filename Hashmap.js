function findCombinations(nums, target) {
    const obj = {};
    const result = [];
  
    // Step: Find combinations equal to the target value
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
      if (obj[complement] !== undefined) {
        result.push([complement, num]);
      }
      obj[num] = i;
    }
  
    // Step 4: Merge and sort the  array
    const mergedArray = result.flat().sort((a, b) => a - b);
  
    // Step 5: Find combinations equal to double the target value
    const doubleTarget = target * 2;
    const secondCombinations = [];
  
    for (let i = 0; i < result.length; i++) {
      const [a, b] = result[i];
      if (obj[b] !== undefined && obj[b] > i) {
        const combination = [a, b, b, a];
        secondCombinations.push(combination);
      }
    }
  
    return [result, mergedArray, secondCombinations];
  }
  
  // Sample input
  const nums = [1, 3, 2, 2, -4, -6, -2, 8];
  const target = 4;
  
  // Find combinations
  const [firstCombinations, mergedArray, secondCombinations] = findCombinations(nums, target);
  
  console.log(`First Combination For ${target}:`, firstCombinations);
  console.log("Merge Into a single Array:", mergedArray);
  console.log(`Second Combination For ${target * 2}:`, secondCombinations);
  


//   Finding combinations (Step 1-3):

//   Iterating through the numbers arr takes O(n) time, where n is the length of the arr.
//   Checking and inserting element into the obj hashmap takes O(1)  time complexity.
//   Therefore, the overall time complexity for finding combinations is O(n).
//   Merge and sortthe arr (Step 4):
  
//   Flat the result ar takes O(n) time, where n is the number of combinations found.
//   Sorting the mergedAr takes O(n log n) time complexi using a comparison-based sorting algorithm.
//   Therefore, the overall time complexity for merge and sort is O(n log n).
//   Finding second combinations (Step 5):
  
//   Iterating through the result arr takes O(n) time, where n is the number of combinations found.
//   Checking and retrieving elements from the obj hashmap takes O(1)  time complexity.
//   Creating and appending combinations to the second Combinations array takes constant time.
//   Therefore, the overall time complexity for finding second combinations is O(n).
//   Overall, the time complexity of the findCombinations function is dominated by the sorting step, which is O(n log n) in the worst case. The other steps contribute to a linear time complexity of O(n).
  