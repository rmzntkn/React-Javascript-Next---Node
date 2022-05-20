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
//add(2, 5); // 7
//add(2)(5); // 7
// const add = (a, b) => {
//   return a + b;
// }

//console.log("i'm a lasagna hog".split('').reverse().join(''));

//
// var foo = { n: 1 };
// var bar = foo;
// foo.x = foo;
// console.log(foo.x);

// function duplicate(s) {
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (!arr.includes(s[i])) {
//       arr.push(s[i]);
//     }
//   }
//   console.log(arr);
//   return arr;
// }
