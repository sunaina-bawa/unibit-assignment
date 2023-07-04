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



// Sorting the array:
// The code first sorts the numbers array using the .sort() method with a comparison function. The time complexity of a comparison-based sorting algorithm like this is O(n log n), where n is the length of the array.
// Finding combinations (two-pointer approach):
// The code uses two pointers, left and right, initially pointing to the start and end of the sorted array.
// It iterates through the array once, performing comparisons and adjusting the pointers based on the sum of the current pair of elements.
// Since the array is sorted, the iteration stops when left and right meet or cross each other, resulting in a linear time complexity of O(n), where n is the length of the array.
// Merging and sorting the array:
// After finding the combinations, the code the result array using the .flat() method, which takes O(n) time, where n is the number of combinations found.
// It then sorts the mergedArray using the .sort() method with a comparison function. Sorting takes O(n log n) time complexity.
// Therefore, the overall time complexity for merging and sorting is O(n log n).
// Finding second combinations:

// The code uses the .map() method to create second combinations by duplicating the pairs found in the result array. The .map() operation takes O(n) time, where n is the number of combinations found.
// Overall, the time complexity of the code is dominated by the sorting step, which is O(n log n) due to the initial sorting of the array and the subsequent sorting of the merged array. The other steps contribute to a linear time complexity of O(n).