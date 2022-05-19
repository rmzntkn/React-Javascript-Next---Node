'use strict';
// //Longest Common Prefix
// const strs = ['flower', 'flower'];
// var longestCommonPrefix = function (strs) {
//   let prefix = '';
//   if (strs === null || strs.length === 0) return prefix;

//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i]; // loop through all characters of the very first string.

//     for (let j = 1; j < strs.length; j++) {
//       // loop through all other strings in the array
//       if (strs[j][i] !== char) return prefix;
//     }
//     prefix = prefix + char;
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(strs));
/////////////////////////
/////////////////////////
/////////////////////////

//13. Roman to Integer
// var romanToInt = function (s) {
//   table = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 100,
//     D: 500,
//     M: 100,
//   };
//   let result = 0;
//   for (i = 0; i < s.length; i++) {
//     if (s[i] < table[s[i + 1]]) {
//       result -= table[s[i]];
//     } else {
//       result += table[s[i]];
//     }
//   }
//   return result;
// };
// romanToInt('III');
///////////////////////
///////////////////////
///////////////////////

//20. Valid Parentheses
// var isValid = function (s) {
//   const table = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };
//   const stack = [];
//   // for (let char of s)
//   //if (table[char] )

//   for (let i = 0; i < s.length; i++) {
//     if (table[s[i]]) {
//       stack.push(table[s[i]]);
//     } else {
//       //if (bracket.pop() !== char)
//       // console.log(s[i], stack.pop());
//       if (s[i] !== stack.pop()) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
// console.log(isValid('()[]{'));
///////////////////////////
///////////////////////////
//21. Merge Two Sorted Lists

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;

//   var mergeTwoLists = function (l1, l2) {
//     // If either list is empty, return the other list's node
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;

//     // If l1 is lower
//     console.log('l1', l1.val, 'l2', l2.val);
//     if (l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//     }
//     // If l2 is lower
//     else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//     }
//   };
//   console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// }
// var mergeTwoLists = function (l1, l2) {
//   // If either list is empty, return the other list's node

//   let temp = new ListNode();
//   let head = temp;

//   while (l1 != null && l2 != null) {
//     if (l1.val < l2.val) {
//       temp.next = l1;

//       l1 = l1.next;
//     } else {
//       temp.next = l2;

//       l2 = l2.next;
//     }

//     temp = temp.next;
//   }

//   if (l1 != null) temp.next = l1;
//   if (l2 != null) temp.next = l2;

//   return head.next;
// };
// // const n1 = {
// //   data: 100,
// // };
// // const n2 = {
// //   data: 200,
// // };
// // n1.next = n2;
// console.log(n1);

/////////////////////////
/////////////////////////
/////////////////////////
//26. Remove Duplicates from Sorted Array

// var removeDuplicates = function (nums) {
//   if (nums.length == 0) return 0;

//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }

//   return i + 1;
// };
// let nums = [1, 1, 2];
// removeDuplicates(nums);
// console.log(nums);

////////////////////////
////////////////////////
////////////////////////
//28. Implement strStr()

// var haystack = 'heello';
// var needle = 'ml';
// var strStr = function (haystack, needle) {
//   var len1 = haystack.length;
//   var len2 = needle.length;
//   if (!len2) return 0;
//   for (var i = 0; i < len1; i++) {
//     for (var j = 0; j < len2; j++) {
//       if (i + j === len1) return -1;
//       if (haystack[i + j] !== needle[j]) break;
//       if (j === len2 - 1) return i;
//     }
//   }
//   return -1;
// };
// console.log(strStr(haystack, needle));

////////////////////////
////////////////////////
////////////////////////
//53. Maximum Subarray
// function maxSubarray(nums) {
//   let max = nums[0];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum > max) max = sum;
//     if (sum < 0) sum = 0;
//   }
//   return max;
// }

////////////////////////
////////////////////////
////////////////////////
//53. Maximum Subarray ----2.MEthod
// function maxSubarray(nums) {
//   if (nums.length === 1) return nums[0];
//   let maxValue = nums[0];
//   let accNum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     let calc = Math.max(nums[i], nums[i] + accNum);
//     if (calc > maxValue) maxValue = calc;
//     accNum = calc;
//   }
//   return max;
// }

////////////////////////
////////////////////////
////////////////////////
//66. Plus One
// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] === 9) {
//       digits[i] = 0;
//     } else {
//       digits[i]++;
//       return digits;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// };
// console.log(plusOne([1, 2, 3]));

////////////////////////
////////////////////////
////////////////////////
//69. Sqrt(x)
// Binary search approach
// var mySqrt = function (x) {
//   let left = 1;
//   let right = x;
//   // The square root of 0 or 1 is itself
//   if (x < 2) return x;

//   // Use binary search to find the square root or the whole number closest to the square root
//   while (left < right) {
//     // Find the mid point between left and right
//     const mid = Math.floor((left + right) / 2);
//     // Return the mid point if this is the square root
//     if (mid * mid === x) return mid;
//     // If mid squared is greater than x then the answer must be on the left half of mid
//     else if (mid * mid > x) right = mid;
//     // If mid squred is less than x then the answer must be on the right half of mid
//     else left = mid + 1;
//   }
//   return left - 1;
// };

// var mySqrt = function (x) {
//   const mid = x / 2;
//   for (let i = 0; i <= x; i++) {
//     if (i * i > x) {
//       return i - 1;
//     }
//   }
// };

////////////////////////
////////////////////////
////////////////////////
//70. Climbing Stairs
// var clibingStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   let first = 1;
//   let second = 2;
//   let third = 0;
//   for (let i = 3; i <= n; i++) {
//     third = first + second;
//     first = second;
//     second = third;
//   }
//   return third;
// };
// console.log(clibingStairs(3));

////////////////////////
////////////////////////
////////////////////////
//88. Merge Sorted Array
// var merge = function (nums1, m, nums2, n) {
//   while (n) {
//     if (nums1[m - 1] > nums2[n - 1]) {
//       nums1[m + n - 1] = nums1[--m];
//     } else {
//       nums1[m + n - 1] = nums2[--n];
//     }
//   }
//   return nums1;
// };

////////////////////////
////////////////////////
////////////////////////
//121. Best Time to Buy and Sell Stock
// var maxProfit = function (prices) {
//   let minBuyPrice = prices[0];
//   let max = 0;
//   for (let i = 1; i < prices.length; i++) {
//     const sellPrice = prices[i];
//     const profit = sellPrice - minBuyPrice;
//     max = Math.max(max, profit);

//     minBuyPrice = Math.min(minBuyPrice, prices[i]);
//   }
//   return max;
// };

////////////////////////
////////////////////////
////////////////////////
//125. Valid Palindrome
// const s = 'Ramazan tekin Naber Lan12';
// const str = s.replace(/[^a-zA-Z0-9]/g, '');
// console.log(str);

////////////////////////
////////////////////////
////////////////////////
//136. Single Number
// var singleNumber = function (nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result ^= nums[i];
//     console.log(result);
//   }
//   console.log('result', result);
//   return result;
// };
// console.log(singleNumber([2, 2, 1, 1, 4, 4]));

////////////////////////
////////////////////////
////////////////////////
//94. Binary Tree Inorder Traversal
// var inorderTraversal = function (root) {
//   let result = [];
//   let stack = [];
//   let current = root;
//   while (current || stack.length) {
//     while (current) {
//       stack.push(current);
//       current = current.left;
//     } // while
//     current = stack.pop();
//     result.push(current.val);
//     current = current.right;
//   } // while
//   return result;
// };

////////////////////////
////////////////////////
////////////////////////
//171. Excel Sheet Column Number
// var titleToNumber = function (s) {
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     console.log('rest', s.charCodeAt(i) - 64);
//     //console.error('resutl', (result = result * 26 + s.charCodeAt(i) - 64));
//   }
//   return result;
// };
// console.log('ABC', titleToNumber('ABC'));

// let rt = 'ABC';

// let tr = rt.charCodeAt(2) - 64;
// console.log(tr);

// var lengthOfLongestSubstring = function (s) {
//   for(let i=0; i<s.length; i++){
//      for(let j =1; j<s.length; j++){
//        if(s[i}===)
//      }
//     ;
//   }
// };

// var lengthOfLongestSubstring = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; j < s.lenght; j++) {
//       if (s[i] === s[j]) {
//         return s.splice(j, 1);
//       }
//     }
//   }
//   return s;
// };
// console.log(lengthOfLongestSubstring('abcabcbb'));

////////////////////////
////////////////////////
////////////////////////
// Consoel only 1 repeat items only lower case letters
// let s = 'abcabcbbv';
// function lengtRemoveDup(s) {
//   let arr = new Array(26);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   for (let i = 0; i < s.length; i++) {
//     arr[s.charAt(i).charCodeAt(0) - 97]++;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//       console.log(String.fromCharCode(97 + i));
//     }
//   }
// }

// lengtRemoveDup(s);

////////////////////////
////////////////////////
////////////////////////
// return items only 1 times in new array
// let s = 'abcabcbbv';
// function removeDublicate(s) {
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (!arr.includes(s[i])) {
//       arr.push(s[i]);
//     }
//   }
//   return arr;
// }

// console.log(removeDublicate(s));

////////////////////////
////////////////////////
////////////////////////
// return items only 1 times in same array
let s = 'abcabcbbv';
function removeDublicate(s) {
  for (let i = 0; i < s.length; i++) {
    s = s.splice(i, 1);
  }
}
