/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
  let up = 0;
  for(var i=0;i<input.length-1;i++){
    if(up == 0){
      if(input[i] < input [i+1]){up = 1;}
      if(input[i] > input [i+1]){up = -1;}
    }else{
      if(up == 1){
        if(input[i] > input [i+1]){return false;}
      }
      if(up == -1){
        if(input[i] < input [i+1]){return false;}
      }
    }
  }
  return true;
};

console.log('hi');
