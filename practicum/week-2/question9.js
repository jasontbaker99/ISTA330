/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(input) {
  let amount = [];
  let temp = input.toString();
  let len = 0;
  for(var i=0;i<temp.length;i++){
    len += 9;
  }
  for(var i=0;i<len;i++){
    amount.push(0);
  }
  for(var x=1;x<=input;x++){
    let s = x.toString();
    let sum = 0;
    for(var i=0;i<s.length;i++){
      sum += parseInt(s[i]);
    }
    amount[sum-1] = amount[sum-1]+1;
  }
  let mx = 0;
  let count = 0;
  for(var i=0;i<amount.length;i++){
    if(amount[i] === mx){
      count++;
    }
    if(mx < amount[i]){
      count = 1;
      mx = amount[i];
    }
  }
  return count;
};
