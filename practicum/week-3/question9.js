/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
  let sum = 0;
  let temp = [];
  for(let i=0;i<A.length;i++){
    while(temp.includes(A[i])){
      A[i] = A[i]+1;
      sum++;
    }
    temp.push(A[i]);
  }
  return sum;
};
