/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
  let n = "";
  let s = [];
  for(var i=0;i<input.length;i++){
    s.push("a");
  }
  for(i=0;i<input.length;i++){
    s[shuffleIndices[i]] = input[i];
  }
  for(i=0;i<input.length;i++){
    n += s[i];
  }
  return n;
};
