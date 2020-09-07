
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
  let mx = 0;
  for(var i=0;i<input.length;i++){
    let sum = 0;
    for(var j=i;j<input.length;j++){
      sum += input[j];
      if(sum > mx){mx = sum}
    } 
  }
  return mx;
 };
